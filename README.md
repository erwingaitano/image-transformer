# Image Transformer

Command line utility to transform images using [GraphicsMagick](https://github.com/aheckmann/gm).

## Installation

```
$ npm install -g image-transformer
```

## Usage

In the command line

```
$ image-transformer files outputDir -- transf1=val1 transf=val2 ...
```

The ouput files will be in the form `~/images/output/[name]-[transformation][value].[ext]`

*Example:*

```
$ image-transformer ~/images/*.jpg ~/images/output -- resize=100
```


*Note: You can use glob to select files.*

## Work in progress

For now, I only tested it with transformations that requires only one parameter. In this case, resize only accepts the width parameter. In the future, it should be able to accept multiple params.

Also, the transformations are not in series, meaning that only one transformation is done per file at a time.