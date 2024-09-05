from flask import Flask, Response
from flask_cors import CORS
import cv2

app = Flask(__name__)
CORS(app)

def generate_frames():
    camera = cv2.VideoCapture(0)
    while True:
        success, frame = camera.read()  
        if not success:
            break
        else:
            # imencode compresses or encodes images into a specific format]
            # here frame is a numpy array it converts frame to .jpg format
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield(b'--frame\r\n'
                  b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            
@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    print("app running at port number 5000")
    app.run(host='0.0.0.0', port=5000)
