from fastapi import FastAPI,File,UploadFile

import shutil
import os


app = FastAPI()

#
@app.get("/make")
def read_root():
  return {"Hello": "World"}

#
@app.post("/files/")
async def file(file: bytes = File(...)):
    content = file.decode('utf-8')
    formatfile = content.split('\n')
    return {'filedetail': formatfile}

#
@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    return {'filename': file.filename}

#
@app.post("/take")
def take():
  return {"Hello":"World!!"}
