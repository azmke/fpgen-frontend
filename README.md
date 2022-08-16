# fpgen-frontend
A web-based user interface for assisted generation of synthetic fingerprints with the help of pre-trained GAN models 🖐

## Run from docker 
```
cd fpgen
docker build --tag fpgen-frontend --progress=plain .
docker run -p 80:80 fpgen-frontend
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.