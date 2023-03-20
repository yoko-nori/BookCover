from fastapi import FastAPI, File
import cv2
import numpy as np

app = FastAPI()

@app.post("/bounding_box/")
def read_root():
  return {"Hello": "World"}