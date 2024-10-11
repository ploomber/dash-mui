<p align="center">
    <h1 align="center"><b>Dash MUI</b></h1>
	<p align="center">
		Beautiful Dash apps without design skills.
    <br />
    <br />
    <br />
    <img width="100" height="100" src="https://avatars.githubusercontent.com/u/60114551?s=200&v=4" alt="Ploomber Logo">
    <br />
    <b>  Made by <a href="https://ploomber.io/?utm_source=dash-mui&utm_medium=github">Ploomber</a> with ❤️</b>
    <br />
    <br />
    <i>Deploy your Dash application on <a href="https://platform.ploomber.io/register/?utm_source=dash-mui&utm_medium=github">Ploomber.io</a> for free.</i>
    <br />
  </p>
</p>
<br/>



https://github.com/user-attachments/assets/15492ec4-a04f-4a76-96fa-50b707898a2e


Live demo: [dash-mui.ploomberapp.io](https://dash-mui.ploomberapp.io/)

## Installation

```sh
pip install dash-mui-ploomber
```

## Demo

```sh
cd demo
pip install -r requirements.txt
python app.py
```

Open: http://localhost:8050


## Developer documentation

## Setup

```sh
# create env
conda create --name dash-mui python=3.12 nodejs=22 -c conda-forge -y
conda activate dash-mui

# run this in the dash-mui directory, where the setup.py file is
pip install -e .
pip install -r requirements.txt -r tests/requirements.txt

npm install
npm run build

# you can test changes using the demo
pip install -r demo/requirements.txt
python demo/app.py
```

## Release

You can see the releases [here](https://pypi.org/project/dash-mui-ploomber/#history)

First, edit `version` in `package.json`, also edit `demo/requirements.txt` to ensure the demo uses the latest version.

```sh
conda activate dash-mui

# generate deployment artifact
npm run build
python setup.py sdist bdist_wheel
ls dist

# test deployment artifact by installing it in a new env
pip install dash dist/dash_mui_ploomber-0.0.1.tar.gz
python demo/app.py

# upload
pip install twine
twine upload dist/*

# clean up
rm -rf dist
```

Deploy demo:

```sh
cd demo
ploomber-cloud deploy
```
