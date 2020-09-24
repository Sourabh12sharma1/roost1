from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np
import tensorflow
# Keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Defining flask app
app = Flask(__name__)


from keras.preprocessing.image import img_to_array
import imutils
import cv2
from keras.models import load_model
import numpy as np
import json
# parameters for loading data and images
def model_predictoin(filename):
    detection_model_path = 'haarcascade_files/haarcascade_frontalface_default.xml'
    emotion_model_path = 'models/_mini_XCEPTION.102-0.66.hdf5'

    # hyper-parameters for bounding boxes shape
    # loading models
    face_detection = cv2.CascadeClassifier(detection_model_path)
    emotion_classifier = load_model(emotion_model_path, compile=False)
    EMOTIONS = ["angry" ,"disgust","scared", "happy", "sad", "surprised",
     "neutral"]   

    img = cv2.imread(filename)


    #reading the frame
    frame = imutils.resize(img,width=400)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_detection.detectMultiScale(gray,scaleFactor=1.1,minNeighbors=5,minSize=(30,30),flags=cv2.CASCADE_SCALE_IMAGE)

    canvas = np.zeros((250, 300, 3), dtype="uint8")
    frameClone = frame.copy()
    if len(faces) > 0:    
        faces = sorted(faces, reverse=True,key=lambda x: (x[2] - x[0]) * (x[3] - x[1]))[0]
        fX, fY, fW, fH = faces
       
                       
        roi = gray[fY:fY + fH, fX:fX + fW]
        roi = cv2.resize(roi, (64, 64))
        roi = roi.astype("float") / 255.0
        roi = img_to_array(roi)
        roi = np.expand_dims(roi, axis=0)


        preds = emotion_classifier.predict(roi)[0]
        emotion_probability = np.max(preds)
        label = EMOTIONS[preds.argmax()]
        main_dict= {}

        for (i,(emotion, prob)) in enumerate(zip(EMOTIONS, preds)):
            # construct the label text
            text = "{}: {:.2f}%".format(emotion, prob * 100)
            # print(prob, prob * 100)
            probability1=prob * 100
            data= {emotion:probability1}
            main_dict.update(data)
        main_json = json.dumps(main_dict)    
        return (main_json)         
    else:
        return str("PLEASE provide correct images")



import os


from flask  import Flask,request,jsonify
import imageio
import cv2
import urllib

app=Flask(__name__)

@app.route('/getprediction',methods=['POST'])
def Home():  
    if request.method=='POST': 
        json_data=request.json
        imgLink=json_data['img_link']
        image = imageio.imread(urllib.request.urlopen(imgLink)) 
        imageio.imsave('image.png',image)
        preds =model_predictoin("image.png")
        path = os.getcwd()
        print(path)
        #os.remove("image.png")


        return preds
        
if __name__ == "__main__": 
    app.run(debug=True)


