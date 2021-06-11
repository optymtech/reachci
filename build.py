#!python3

import os
import sys
import json
# import requests
import zipfile
from shutil import copyfile

def main():

	os.chdir('build')

	pathname = sys.argv[1]

	if not pathname.startswith("src/"):
		return
	
	filename = os.path.basename(pathname)
	if filename.endswith('.js'):
		os.mkdir(filename[:-3])
		copyfile('../index.rsh', filename[:-3] + '/index.rsh')
		copyfile('../src/' + filename, filename[:-3] + '/bountyFunction.rsh')
		os.chdir(filename[:-3])
		os.system('../../reach compile')
		os.chdir('..')

	os.chdir('..')
	return

if __name__ == '__main__':
	main()
