FROM jjanzic/docker-python3-opencv
#FROM python:3.7.6
WORKDIR /code
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0

#COPY requirements.txt requirements.txt
#RUN pip install -r requirements.txt
#RUN pip install opencv-python
RUN pip install pandas
RUN pip install scikit-learn
RUN pip install numpy
RUN pip install Flask
RUN pip install imutils
RUN pip install Pillow
RUN pip install imageio
RUN pip install gevent
RUN pip install Keras==2.3.1
RUN pip install tensorflow==1.15.2

EXPOSE 5000
COPY . .
CMD ["flask", "run"]