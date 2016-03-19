# Image Transformer

Command line utility to transform images using [GraphicsMagick](https://github.com/aheckmann/gm).

## Installation

Clone the repo and

```
$ npm install
```

## Usage

From the command line

```
$ image-transformer files output -- transformations
```

Example:

```
$ image-transformer ~/images/*.(png|gif) ~/images/output -- resize=100
```

The ouput files will be in the form `~/images/output/[name]-[transformation].[ext]`

## Work in progress

For now, I only tested it with transformations that requires only one parameter. In this case, resize only accepts the width parameter. In the future, it should be able to accept multiple params.

Also, the transformations are not in series, meaning that only one transformation per file at a time.