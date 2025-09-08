#!/bin/bash

# Recovery Script: Revert CSS to Next.js Image Conversion Changes
# Usage: ./revert-to-baseline.sh

echo "🔄 Reverting all changes back to baseline commit..."
echo "⚠️  This will discard ALL uncommitted changes!"

read -p "Are you sure you want to continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "❌ Operation cancelled."
    exit 1
fi

# Reset to the baseline commit
git reset --hard 066837d

echo "✅ Successfully reverted to baseline commit!"
echo "🎯 All CSS-based image implementations have been restored."
echo ""
echo "Current commit: $(git rev-parse --short HEAD)"
echo "Files are now in their original state before the conversion."
