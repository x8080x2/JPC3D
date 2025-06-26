#!/usr/bin/env python3
import shutil
import os

# Copy the logo file to the public directory
source = "attached_assets/Screenshot 2025-06-26 at 11.12.00 AM_1750929457016.jpeg"
dest = "client/public/user-logo.jpeg"

try:
    shutil.copy2(source, dest)
    print(f"Successfully copied logo from {source} to {dest}")
except Exception as e:
    print(f"Error copying logo: {e}")
    # Try the other file
    source2 = "attached_assets/Screenshot 2025-06-26 at 11.12.00 AM_1750929226049.jpeg"
    try:
        shutil.copy2(source2, dest)
        print(f"Successfully copied logo from {source2} to {dest}")
    except Exception as e2:
        print(f"Error copying second logo: {e2}")