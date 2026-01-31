@echo off
setlocal
set "ASPNETCORE_URLS=http://localhost:5000"
set "APP_URL=http://localhost:5000"
echo Starting HytaleManager...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process -FilePath '%~dp0HytaleManager.exe' -WorkingDirectory '%~dp0' -WindowStyle Hidden | Out-Null"
ping 127.0.0.1 -n 2 >nul
start "" "%APP_URL%"
