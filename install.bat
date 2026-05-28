@echo off
REM Keystone Schools Website - Installation Script for Windows

echo.
echo ========================================
echo Keystone Schools Website Installation
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js is installed
node --version
echo.

REM Install dependencies
echo Installing dependencies...
echo This may take a few minutes...
call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo To start the development server, run:
echo    npm run dev
echo.
echo Then open your browser to:
echo    http://localhost:3000
echo.
pause
