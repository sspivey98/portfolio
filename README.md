#  Portfolio in ReactJS

## Developing

>development
- `npm run dev`

>qualification 
- `npm run build` then `npm run preview`

>production
- `serve -s dist` **(`npm i serve -g` is needed if `serve` DNE)

## Deployment

1. `docker build . -t "portfolio:vX.X"` **Step 'RUN npm install' can take a few minutes!
2. `docker run --name portfolio -p 3000:3000 portfolio:vX.X`

## exporting / importing

- `docker save -o portfolio.tar`

then...

- `docker load --input ./portfolio.tar`
