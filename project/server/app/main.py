from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
import cv2
import numpy as np
import io

app = FastAPI()

@app.post("/upload_add_line")
async def add_dotted_line(image_file: UploadFile = File(...)):
    # アップロードされた画像を読み込み
    image_bytes = await image_file.read()
    image_np = np.frombuffer(image_bytes, dtype=np.uint8)
    img = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    h,w=img.shape[:2]
    #破線の情報
    dashp=5 #破線の太さ
    dashw=10 #破線一本あたりの幅
    color=[0,0,255] #BGR三要素
    y=300 #破線の開始位置

    #破線作成開始
    i=0
    while i<w:
        img[int(y-dashp/2):int(y+dashp/2),i:i+dashw,:]=[0,0,255]
        i=i+dashw*2

    is_success, buffer = cv2.imwrite('grid.jpg',img)


    # 画像をバイト列にエンコード
    #is_success2, buffer2 = cv2.imencode("grid2.jpg", img)
    #io_buf = io.BytesIO(buffer)
    #io_buf2 = io.BytesIO(buffer2)

    # レスポンスとして画像を返す
    #return FileResponse(buffer2, media_type="image/jpeg", filename="dotted_line.jpg")