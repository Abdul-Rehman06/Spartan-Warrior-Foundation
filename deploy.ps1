$ErrorActionPreference = "Stop"

$port = 65002
$user = "u619583079"
$hostName = "85.31.227.213"
$remotePath = "~/domains/spartanwarriorfoundation.com/public_html/"

Write-Host ""
Write-Host "Building..." -ForegroundColor Cyan
& npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed." }

if (-not (Test-Path -Path ".\dist")) { throw "dist folder not found. Build may have failed." }

Write-Host ""
Write-Host "Uploading dist/ to $user@${hostName}:$remotePath" -ForegroundColor Cyan
& scp -P $port -r "dist/." "$user@${hostName}`:$remotePath"
if ($LASTEXITCODE -ne 0) { throw "SCP upload failed." }

Write-Host ""
Write-Host "Deployment complete." -ForegroundColor Green
