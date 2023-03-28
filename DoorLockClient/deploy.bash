dotnet publish --runtime linux-arm64 --self-contained -c Release
scp -r ./bin/Release/net6.0/linux-arm64/* pi@192.168.178.61:/home/pi/blockchain