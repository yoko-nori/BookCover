FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

WORKDIR /usr/src/server/app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y libgl1-mesa-dev

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]
