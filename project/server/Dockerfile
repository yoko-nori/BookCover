FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

WORKDIR /usr/src/server

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]
