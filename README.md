# Image Transformer

Command line utility to transform images using [GraphicsMagick](https://github.com/aheckmann/gm).

## Installation

```
$ npm install -g image-transformer
```

## Usage

In the command line

```
$ image-transformer files output -- transformation=value transformation2=value2 ...
```

Example:

```
$ image-transformer ~/images/*.(png|gif) ~/images/output -- resize=100
```

The ouput files will be in the form `~/images/output/[name]-[transformation].[ext]`

## Work in progress

For now, I only tested it with transformations that requires only one parameter. In this case, resize only accepts the width parameter. In the future, it should be able to accept multiple params.

Also, the transformations are not in series, meaning that only one transformation is done per file at a time.