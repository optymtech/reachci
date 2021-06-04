#!python3

import os
import sys
import json
# import requests
import zipfile
from shutil import copyfile

def main():
	
	try:
		os.mkdir('build')
	except OSError as error:
		pass
	os.chdir('build')

	for filename in os.listdir('../src'):
		if filename.endswith('.js'):
			os.mkdir(filename[:-3])
			copyfile('../index.rsh', filename[:-3] + '/index.rsh')
			copyfile('../src/' + filename, filename[:-3] + '/bountyFunction.rsh')
			os.chdir(filename[:-3])
			os.system('../../reach compile')
			os.chdir('..')
		else:
			continue

	return

if __name__ == '__main__':
	main()
