# Cordova Integration Guide

## Problem
Face-api.js resource loading fails in Cordova due to file:// protocol.

## Solution

### Copy Models
Place model files in `www/models/` directory.

### Load from Local
```javascript
const modelsPath = cordova.file.applicationDirectory + 'www/models';
await faceapi.nets.tinyFaceDetector.loadFromUri(modelsPath);
```

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self' data: file: gap:; 
               script-src 'self' 'unsafe-eval'; 
               img-src 'self' data: file: blob:;">
```

### Common Errors
| Error | Fix |
|-------|-----|
| Failed to load resource | Use absolute file:// path |
| CORS error | Update CSP |
| Canvas tainted | Use local files only |
