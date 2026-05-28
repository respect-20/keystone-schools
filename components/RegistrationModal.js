import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle } from 'react-icons/hi';

export default function RegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: '',
    studentLastName: '',
    studentDOB: '',
    studentGender: '',
    currentForm: '',

    // Parent/Guardian Information
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelation: '',

    // Contact Information
    contactAddress: '',
    contactCity: '',
    contactPostalCode: '',

    // Academic Information
    currentSchool: '',
    previousResults: '',
    reasonForApplying: '',

    // Additional Information
    specialNeeds: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.studentFirstName) newErrors.studentFirstName = 'First name is required';
      if (!formData.studentLastName) newErrors.studentLastName = 'Last name is required';
      if (!formData.studentDOB) newErrors.studentDOB = 'Date of birth is required';
      if (!formData.studentGender) newErrors.studentGender = 'Gender is required';
      if (!formData.currentForm) newErrors.currentForm = 'Current form is required';
    } else if (currentStep === 2) {
      if (!formData.parentName) newErrors.parentName = 'Parent name is required';
      if (!formData.parentEmail) newErrors.parentEmail = 'Email is required';
      if (!formData.parentPhone) newErrors.parentPhone = 'Phone number is required';
      if (!formData.parentRelation) newErrors.parentRelation = 'Relation is required';
    } else if (currentStep === 3) {
      if (!formData.contactAddress) newErrors.contactAddress = 'Address is required';
      if (!formData.contactCity) newErrors.contactCity = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {

      // ── WhatsApp message ──────────────────────────────────────────
      const whatsappMessage =
`🏫 *KEYSTONE SCHOOLS — NEW REGISTRATION*

━━━━━━━━━━━━━━━━━━━━━━
📋 *STUDENT INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━
• *Full Name:* ${formData.studentFirstName} ${formData.studentLastName}
• *Date of Birth:* ${formData.studentDOB}
• *Gender:* ${formData.studentGender}
• *Applying For:* ${formData.currentForm}
• *Current School:* ${formData.currentSchool || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━
👨‍👩‍👧 *PARENT / GUARDIAN*
━━━━━━━━━━━━━━━━━━━━━━
• *Name:* ${formData.parentName}
• *Relation:* ${formData.parentRelation}
• *Email:* ${formData.parentEmail}
• *Phone:* ${formData.parentPhone}

━━━━━━━━━━━━━━━━━━━━━━
🏠 *CONTACT ADDRESS*
━━━━━━━━━━━━━━━━━━━━━━
• *Address:* ${formData.contactAddress}
• *City:* ${formData.contactCity}
• *Postal Code:* ${formData.contactPostalCode || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━
📝 *ADDITIONAL DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
• *Reason for Applying:* ${formData.reasonForApplying || 'N/A'}
• *Special Needs:* ${formData.specialNeeds || 'None'}
• *Newsletter:* ${formData.newsletter ? 'Yes' : 'No'}

━━━━━━━━━━━━━━━━━━━━━━
✅ Submitted via Keystone Schools Website`;

      // ── Email body ────────────────────────────────────────────────
      const emailSubject = `New Registration — ${formData.studentFirstName} ${formData.studentLastName} (${formData.currentForm})`;
      const emailBody =
`KEYSTONE SCHOOLS — NEW STUDENT REGISTRATION
============================================

STUDENT INFORMATION
-------------------
Full Name    : ${formData.studentFirstName} ${formData.studentLastName}
Date of Birth: ${formData.studentDOB}
Gender       : ${formData.studentGender}
Applying For : ${formData.currentForm}
Current School: ${formData.currentSchool || 'N/A'}

PARENT / GUARDIAN INFORMATION
------------------------------
Name     : ${formData.parentName}
Relation : ${formData.parentRelation}
Email    : ${formData.parentEmail}
Phone    : ${formData.parentPhone}

CONTACT ADDRESS
---------------
Address    : ${formData.contactAddress}
City       : ${formData.contactCity}
Postal Code: ${formData.contactPostalCode || 'N/A'}

ADDITIONAL DETAILS
------------------
Reason for Applying : ${formData.reasonForApplying || 'N/A'}
Special Needs       : ${formData.specialNeeds || 'None'}
Newsletter          : ${formData.newsletter ? 'Yes' : 'No'}

--------------------------------------------
Submitted via Keystone Schools Website`;

      // Open WhatsApp
      const waURL = `https://wa.me/263771824701?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(waURL, '_blank');

      // Open Email
      const mailURL = `mailto:info@keystoneschools.co.zw?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailURL, '_blank');

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setStep(1);
        setFormData({
          studentFirstName: '',
          studentLastName: '',
          studentDOB: '',
          studentGender: '',
          currentForm: '',
          parentName: '',
          parentEmail: '',
          parentPhone: '',
          parentRelation: '',
          contactAddress: '',
          contactCity: '',
          contactPostalCode: '',
          currentSchool: '',
          previousResults: '',
          reasonForApplying: '',
          specialNeeds: '',
          newsletter: false,
        });
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary to-red-700 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Register for Keystone Schools</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                {isSubmitted ? (
                  // Success Message
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <HiCheckCircle className="text-6xl text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary mb-2">Registration Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Your application has been sent successfully.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 rounded-lg px-4 py-2">
                        <span>💬</span>
                        <span>WhatsApp message sent to <strong>+263 771 824 701</strong></span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-700 bg-blue-50 rounded-lg px-4 py-2">
                        <span>📧</span>
                        <span>Email sent to <strong>info@keystoneschools.co.zw</strong></span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Our admissions team will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Progress Indicator */}
                    <div className="mb-8">
                      <div className="flex justify-between mb-4">
                        {[1, 2, 3, 4].map((s) => (
                          <div
                            key={s}
                            className={`flex-1 h-2 mx-1 rounded-full transition-all ${
                              s <= step ? 'bg-primary' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Step {step} of 4</p>
                    </div>

                    {/* Step 1: Student Information */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-bold text-secondary mb-6">Student Information</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="studentFirstName"
                              value={formData.studentFirstName}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.studentFirstName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="First name"
                            />
                            {errors.studentFirstName && (
                              <p className="text-red-500 text-sm mt-1">{errors.studentFirstName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="studentLastName"
                              value={formData.studentLastName}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.studentLastName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Last name"
                            />
                            {errors.studentLastName && (
                              <p className="text-red-500 text-sm mt-1">{errors.studentLastName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Date of Birth *
                            </label>
                            <input
                              type="date"
                              name="studentDOB"
                              value={formData.studentDOB}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.studentDOB ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {errors.studentDOB && (
                              <p className="text-red-500 text-sm mt-1">{errors.studentDOB}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Gender *
                            </label>
                            <select
                              name="studentGender"
                              value={formData.studentGender}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.studentGender ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                            {errors.studentGender && (
                              <p className="text-red-500 text-sm mt-1">{errors.studentGender}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Applying for Form *
                            </label>
                            <select
                              name="currentForm"
                              value={formData.currentForm}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.currentForm ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select form</option>
                              <option value="Form 1">Form 1</option>
                              <option value="Form 2">Form 2</option>
                              <option value="Form 3">Form 3</option>
                              <option value="Form 4">Form 4</option>
                            </select>
                            {errors.currentForm && (
                              <p className="text-red-500 text-sm mt-1">{errors.currentForm}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Current School
                            </label>
                            <input
                              type="text"
                              name="currentSchool"
                              value={formData.currentSchool}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Current school name"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Parent Information */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-bold text-secondary mb-6">Parent/Guardian Information</h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.parentName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Parent/Guardian name"
                            />
                            {errors.parentName && (
                              <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="parentEmail"
                              value={formData.parentEmail}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.parentEmail ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="email@example.com"
                            />
                            {errors.parentEmail && (
                              <p className="text-red-500 text-sm mt-1">{errors.parentEmail}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="parentPhone"
                              value={formData.parentPhone}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.parentPhone ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="+263 773 000 000"
                            />
                            {errors.parentPhone && (
                              <p className="text-red-500 text-sm mt-1">{errors.parentPhone}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Relation to Student *
                            </label>
                            <select
                              name="parentRelation"
                              value={formData.parentRelation}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.parentRelation ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select relation</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Guardian">Guardian</option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.parentRelation && (
                              <p className="text-red-500 text-sm mt-1">{errors.parentRelation}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact Information */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-bold text-secondary mb-6">Contact Information</h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Street Address *
                            </label>
                            <input
                              type="text"
                              name="contactAddress"
                              value={formData.contactAddress}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                errors.contactAddress ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Street address"
                            />
                            {errors.contactAddress && (
                              <p className="text-red-500 text-sm mt-1">{errors.contactAddress}</p>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-secondary mb-2">
                                City *
                              </label>
                              <input
                                type="text"
                                name="contactCity"
                                value={formData.contactCity}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                                  errors.contactCity ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="City"
                              />
                              {errors.contactCity && (
                                <p className="text-red-500 text-sm mt-1">{errors.contactCity}</p>
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-secondary mb-2">
                                Postal Code
                              </label>
                              <input
                                type="text"
                                name="contactPostalCode"
                                value={formData.contactPostalCode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Postal code"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Reason for Applying
                            </label>
                            <textarea
                              name="reasonForApplying"
                              value={formData.reasonForApplying}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                              placeholder="Tell us why you're interested in Keystone Schools"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-secondary mb-2">
                              Special Needs/Accommodations
                            </label>
                            <textarea
                              name="specialNeeds"
                              value={formData.specialNeeds}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-20"
                              placeholder="If any (optional)"
                            />
                          </div>

                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              name="newsletter"
                              checked={formData.newsletter}
                              onChange={handleChange}
                              className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-primary"
                            />
                            <label className="text-sm text-gray-600">
                              Subscribe to Keystone Schools newsletter for updates and news
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Review */}
                    {step === 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-bold text-secondary mb-6">Review Your Information</h3>

                        <div className="space-y-6 bg-light p-6 rounded-lg">
                          <div>
                            <h4 className="font-bold text-secondary mb-3">Student Information</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <p>
                                <span className="text-gray-600">Name:</span> {formData.studentFirstName}{' '}
                                {formData.studentLastName}
                              </p>
                              <p>
                                <span className="text-gray-600">Date of Birth:</span> {formData.studentDOB}
                              </p>
                              <p>
                                <span className="text-gray-600">Gender:</span> {formData.studentGender}
                              </p>
                              <p>
                                <span className="text-gray-600">Applying for:</span> {formData.currentForm}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-secondary mb-3">Parent Information</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <p>
                                <span className="text-gray-600">Name:</span> {formData.parentName}
                              </p>
                              <p>
                                <span className="text-gray-600">Email:</span> {formData.parentEmail}
                              </p>
                              <p>
                                <span className="text-gray-600">Phone:</span> {formData.parentPhone}
                              </p>
                              <p>
                                <span className="text-gray-600">Relation:</span> {formData.parentRelation}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-secondary mb-3">Contact Address</h4>
                            <p className="text-sm">
                              {formData.contactAddress}, {formData.contactCity}{' '}
                              {formData.contactPostalCode}
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-800">
                            ✓ By clicking "Submit Application", you agree that the information provided is accurate and complete.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-secondary hover:bg-gray-50 transition"
                        >
                          Previous
                        </button>
                      )}

                      {step < 4 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                          Submit Application
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
