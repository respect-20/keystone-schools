# 🔗 Keystone Schools - Laravel Backend Integration Guide

Complete guide for connecting the Next.js frontend to a Laravel backend API.

---

## Overview

This guide shows how to:
1. Set up a Laravel API backend
2. Connect the Next.js frontend to Laravel
3. Handle registration form submissions
4. Manage student data
5. Deploy both frontend and backend

---

## Part 1: Laravel Backend Setup

### Prerequisites

- PHP 8.0+
- Composer
- MySQL/PostgreSQL
- Laravel 10+

### Step 1: Create Laravel Project

```bash
composer create-project laravel/laravel keystone-api
cd keystone-api
```

### Step 2: Configure Database

Create `.env` file and update:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=keystone_schools
DB_USERNAME=root
DB_PASSWORD=
```

### Step 3: Create Database

```bash
php artisan migrate
```

### Step 4: Enable CORS

Install CORS package:
```bash
composer require fruitcake/laravel-cors
```

Update `config/cors.php`:
```php
'allowed_origins' => ['https://keystoneschools.co.zw', 'http://localhost:3000'],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
'exposed_headers' => ['*'],
```

---

## Part 2: Create Registration Model & Migration

### Create Model and Migration

```bash
php artisan make:model Registration -m
```

### Update Migration (database/migrations/xxx_create_registrations_table.php)

```php
Schema::create('registrations', function (Blueprint $table) {
    $table->id();
    
    // Student Information
    $table->string('student_first_name');
    $table->string('student_last_name');
    $table->date('student_dob');
    $table->enum('student_gender', ['male', 'female']);
    $table->string('current_form'); // Form 1, 2, 3, 4
    $table->string('current_school')->nullable();
    
    // Parent Information
    $table->string('parent_name');
    $table->string('parent_email');
    $table->string('parent_phone');
    $table->string('parent_relation');
    
    // Contact Information
    $table->text('contact_address');
    $table->string('contact_city');
    $table->string('contact_postal_code')->nullable();
    
    // Additional
    $table->text('reason_for_applying')->nullable();
    $table->text('special_needs')->nullable();
    $table->boolean('newsletter_subscription')->default(false);
    
    // Status
    $table->enum('status', ['pending', 'reviewed', 'accepted', 'rejected'])->default('pending');
    $table->timestamps();
});
```

Run migration:
```bash
php artisan migrate
```

### Update Registration Model (app/Models/Registration.php)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
        'student_first_name',
        'student_last_name',
        'student_dob',
        'student_gender',
        'current_form',
        'current_school',
        'parent_name',
        'parent_email',
        'parent_phone',
        'parent_relation',
        'contact_address',
        'contact_city',
        'contact_postal_code',
        'reason_for_applying',
        'special_needs',
        'newsletter_subscription',
        'status',
    ];

    protected $casts = [
        'student_dob' => 'date',
        'newsletter_subscription' => 'boolean',
    ];
}
```

---

## Part 3: Create API Controller

### Create Controller

```bash
php artisan make:controller Api/RegistrationController
```

### Update RegistrationController (app/Http/Controllers/Api/RegistrationController.php)

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Registration;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class RegistrationController extends Controller
{
    /**
     * Store a new registration
     */
    public function store(Request $request)
    {
        try {
            // Validate request
            $validated = $request->validate([
                'studentFirstName' => 'required|string|max:255',
                'studentLastName' => 'required|string|max:255',
                'studentDOB' => 'required|date',
                'studentGender' => 'required|in:male,female',
                'currentForm' => 'required|in:Form 1,Form 2,Form 3,Form 4',
                'currentSchool' => 'nullable|string|max:255',
                'parentName' => 'required|string|max:255',
                'parentEmail' => 'required|email|max:255',
                'parentPhone' => 'required|string|max:20',
                'parentRelation' => 'required|string|max:255',
                'contactAddress' => 'required|string',
                'contactCity' => 'required|string|max:255',
                'contactPostalCode' => 'nullable|string|max:20',
                'reasonForApplying' => 'nullable|string',
                'specialNeeds' => 'nullable|string',
                'newsletter' => 'nullable|boolean',
            ]);

            // Convert camelCase to snake_case
            $data = [
                'student_first_name' => $validated['studentFirstName'],
                'student_last_name' => $validated['studentLastName'],
                'student_dob' => $validated['studentDOB'],
                'student_gender' => $validated['studentGender'],
                'current_form' => $validated['currentForm'],
                'current_school' => $validated['currentSchool'],
                'parent_name' => $validated['parentName'],
                'parent_email' => $validated['parentEmail'],
                'parent_phone' => $validated['parentPhone'],
                'parent_relation' => $validated['parentRelation'],
                'contact_address' => $validated['contactAddress'],
                'contact_city' => $validated['contactCity'],
                'contact_postal_code' => $validated['contactPostalCode'],
                'reason_for_applying' => $validated['reasonForApplying'],
                'special_needs' => $validated['specialNeeds'],
                'newsletter_subscription' => $validated['newsletter'] ?? false,
                'status' => 'pending',
            ];

            // Create registration
            $registration = Registration::create($data);

            // Send confirmation email (optional)
            // Mail::to($data['parent_email'])->send(new RegistrationConfirmation($registration));

            return response()->json([
                'success' => true,
                'message' => 'Registration submitted successfully',
                'registration_id' => $registration->id,
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get all registrations (admin)
     */
    public function index(Request $request)
    {
        $registrations = Registration::query();

        // Filter by status
        if ($request->has('status')) {
            $registrations->where('status', $request->status);
        }

        // Filter by form
        if ($request->has('form')) {
            $registrations->where('current_form', $request->form);
        }

        // Paginate
        return response()->json([
            'success' => true,
            'data' => $registrations->paginate(15),
        ]);
    }

    /**
     * Get single registration
     */
    public function show($id)
    {
        $registration = Registration::find($id);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Registration not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $registration,
        ]);
    }

    /**
     * Update registration status
     */
    public function updateStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,reviewed,accepted,rejected',
        ]);

        $registration = Registration::find($id);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Registration not found',
            ], 404);
        }

        $registration->update(['status' => $validated['status']]);

        return response()->json([
            'success' => true,
            'message' => 'Status updated',
            'data' => $registration,
        ]);
    }
}
```

---

## Part 4: Create API Routes

### Update routes/api.php

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegistrationController;

Route::middleware('api')->group(function () {
    // Public routes
    Route::post('/registrations', [RegistrationController::class, 'store']);

    // Protected routes (add middleware as needed)
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/registrations', [RegistrationController::class, 'index']);
        Route::get('/registrations/{id}', [RegistrationController::class, 'show']);
        Route::put('/registrations/{id}/status', [RegistrationController::class, 'updateStatus']);
    });
});
```

---

## Part 5: Connect Next.js Frontend to Laravel

### Update pages/api/register.js

```javascript
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      // Validate required fields
      if (
        !formData.studentFirstName ||
        !formData.studentLastName ||
        !formData.parentEmail ||
        !formData.parentPhone
      ) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      // Call Laravel API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/registrations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json({
          success: false,
          message: data.message || 'Registration failed',
          errors: data.errors,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Registration submitted successfully',
        registration_id: data.registration_id,
      });

    } catch (error) {
      console.error('Registration error:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your registration',
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
```

### Update .env.local

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
# or for production:
# NEXT_PUBLIC_API_URL=https://api.keystoneschools.co.zw
```

---

## Part 6: Update Registration Modal

### Update components/RegistrationModal.js

Find the `handleSubmit` function and update it:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateStep(step)) {
    try {
      setIsLoading(true);

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || { form: data.message });
        return;
      }

      // Success
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setStep(1);
        resetForm();
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setErrors({ form: 'Failed to submit registration' });
    } finally {
      setIsLoading(false);
    }
  }
};
```

---

## Part 7: Testing

### Test Laravel API

```bash
# Start Laravel server
php artisan serve

# Test registration endpoint
curl -X POST http://localhost:8000/api/registrations \
  -H "Content-Type: application/json" \
  -d '{
    "studentFirstName": "John",
    "studentLastName": "Doe",
    "studentDOB": "2010-05-15",
    "studentGender": "male",
    "currentForm": "Form 1",
    "parentName": "Jane Doe",
    "parentEmail": "jane@example.com",
    "parentPhone": "+263773000000",
    "parentRelation": "Mother",
    "contactAddress": "123 Street",
    "contactCity": "Harare"
  }'
```

### Test in Next.js

1. Start both servers
2. Try registration form
3. Check Laravel database for new entry
4. Monitor network tab in browser DevTools

---

## Part 8: Production Deployment

### Deploy Laravel to Server

```bash
# Install dependencies
composer install --no-dev

# Generate key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Optimize
php artisan optimize
php artisan config:cache
php artisan route:cache
```

### Deploy Next.js

```bash
# Build
npm run build

# Deploy to Vercel or Netlify
vercel deploy --prod
```

### Update API Endpoint

Update `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.keystoneschools.co.zw
```

---

## Part 9: Admin Dashboard (Optional)

Create admin panel to manage registrations:

```php
// routes/web.php
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/registrations', function () {
        $registrations = \App\Models\Registration::paginate(15);
        return view('admin.registrations', compact('registrations'));
    });
});
```

---

## Troubleshooting

### CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:** Update `config/cors.php`

### 404 Not Found
- Check API endpoint URL
- Verify routes are correct
- Check Laravel server is running

### Database Connection
```bash
php artisan migrate:refresh
php artisan migrate
```

### Email Not Sending
```bash
# Test email configuration
php artisan tinker
Mail::send(...);
```

---

## Security Best Practices

1. **Add Rate Limiting**
```php
Route::post('/registrations', [RegistrationController::class, 'store'])
    ->middleware('throttle:10,1');
```

2. **Add CSRF Protection**
```php
// Laravel handles automatically
```

3. **Validate Input**
```php
// Already included in controller
```

4. **Use HTTPS**
- Enable in production
- Configure SSL certificates

5. **Add Authentication**
```php
Route::middleware('auth:sanctum')->group(function () {
    // Protected routes
});
```

---

## Database Backup

### Automatic Backups

```bash
# Daily backup
php artisan schedule:work

# In app/Console/Kernel.php
$schedule->command('backup:run')->daily();
```

### Manual Backup

```bash
# Export database
mysqldump -u root -p keystone_schools > backup.sql

# Import backup
mysql -u root -p keystone_schools < backup.sql
```

---

## File Structure

```
backend/
├── app/
│   ├── Models/
│   │   └── Registration.php
│   └── Http/
│       └── Controllers/
│           └── Api/
│               └── RegistrationController.php
├── database/
│   └── migrations/
│       └── xxx_create_registrations_table.php
├── routes/
│   └── api.php
├── .env
└── config/
    └── cors.php
```

---

## Summary

1. ✅ Created Laravel API
2. ✅ Set up Registration model
3. ✅ Created API routes
4. ✅ Connected Next.js frontend
5. ✅ Tested submissions
6. ✅ Deployed both services
7. ✅ Monitored system

**Your complete application is ready!** 🎉

---

**Next Steps:**
- Add more features (notifications, payments)
- Create admin dashboard
- Set up email notifications
- Add SMS notifications
- Implement payment processing

**Need Help?**
- Laravel Docs: https://laravel.com/docs
- API Documentation: https://laravel.com/docs/api-resources
- Contact: info@keystoneschools.co.zw
