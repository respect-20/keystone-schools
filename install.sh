#!/bin/bash

# Keystone Schools Website - Installation Script for Mac/Linux

echo ""
echo "========================================"
echo "Keystone Schools Website Installation"
echo "========================================"
echo ""

# Check if Node.js is installed
echo "Checking for Node.js..."
if ! command -v node &> /dev/null; then
    echo ""
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    echo ""
    exit 1
fi

echo "Node.js is installed"
node --version
echo ""

# Install dependencies
echo "Installing dependencies..."
echo "This may take a few minutes..."
npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Failed to install dependencies"
    exit 1
fi

echo ""
echo "========================================"
echo "Installation Complete!"
echo "========================================"
echo ""
echo "To start the development server, run:"
echo "    npm run dev"
echo ""
echo "Then open your browser to:"
echo "    http://localhost:3000"
echo ""
