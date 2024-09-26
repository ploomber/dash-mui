<p align="center">
    <h1 align="center"><b>Dash MUI</b></h1>
	<p align="center">
		Beautiful Dash apps without design skills.
    <br />
    <br />
    <br />
    <img width="100" height="100" src="https://avatars.githubusercontent.com/u/60114551?s=200&v=4" alt="Ploomber Logo">
    <br />
    <b>  Made by <a href="https://ploomber.io">Ploomber</a> with ❤️</b>
    <br />
    <br />
    <i>Deploy your Dash application on <a href="https://ploomber.io">Ploomber.io</a> for free.</i>
    <br />
  </p>
</p>
<br/>


Live demo: [dash-mui.ploomberapp.io](https://dash-mui.ploomberapp.io/)

## Installation

```sh
pip install dash-mui-ploomber
```

## Run demo locally

```sh
cd demo
pip install -r requirements.txt
python app.py
```

Open: http://localhost:8050


## Documentation


## Setup

```sh
npm install
pip install -r requirements.txt
pip install -r tests/requirements.txt
```

## Development

```sh
npm run build
python demo.py
```


## Release

```sh
# generate
npm run build
python setup.py sdist bdist_wheel
ls dist

# test artifact
pip install dash dist/dash_mui_ploomber-0.0.1.tar.gz
python demo/app.py

# upload
pip install twine
twine upload dist/*

# clean up
rm -rf dist
```
