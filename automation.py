from importlib.resources import path
import os
from turtle import fd, title
from selenium import webdriver
import time
import nox
import pyscreeze 
import pyautogui
from pywinauto.application import Application 
from selenium.webdriver.common.keys import Keys

browser = webdriver.Chrome()
file = 'C:\\ProgramData\\BlueStacks_msi2\\Client\\Bluestacks.exe'
browser.get('https://web.whatsapp.com/')
time.sleep(5)
os.startfile(file)

browser.quit()