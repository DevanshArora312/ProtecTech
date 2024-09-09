# -*- coding: utf-8 -*-
"""
Created on Sun Sep  8 18:44:24 2024

@author: mayank
"""

# Load the dataset
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
import joblib


data_txt_path = "data.txt"
data_txt = pd.read_csv(data_txt_path, sep="\t")


label_encoder_state = LabelEncoder()
label_encoder_day_night = LabelEncoder()
label_encoder_crime = LabelEncoder()

data_txt['State'] = label_encoder_state.fit_transform(data_txt['State'])
data_txt['Day/Night'] = label_encoder_day_night.fit_transform(data_txt['Day/Night'])
data_txt['Crime Taken Place'] = label_encoder_crime.fit_transform(data_txt['Crime Taken Place'])


X_txt = data_txt[['State', 'Day/Night', 'Population Density', 'Nearest Police Station']]
y_txt = data_txt['Crime Taken Place']


scaler = StandardScaler()
X_txt[['Population Density', 'Nearest Police Station']] = scaler.fit_transform(X_txt[['Population Density', 'Nearest Police Station']])


X_train_txt, X_test_txt, y_train_txt, y_test_txt = train_test_split(X_txt, y_txt, test_size=0.2, random_state=42)


model_txt = RandomForestClassifier(n_estimators=100, random_state=42)
model_txt.fit(X_train_txt, y_train_txt)


y_pred_txt = model_txt.predict(X_test_txt)
accuracy_txt = accuracy_score(y_test_txt, y_pred_txt)
report_txt = classification_report(y_test_txt, y_pred_txt)

print(f"Model Accuracy: {accuracy_txt * 100:.2f}%")
print("Classification Report:")
print(report_txt)



joblib.dump(label_encoder_state, 'label_encoder_state.pkl')
joblib.dump(label_encoder_day_night, 'label_encoder_day_night.pkl')
joblib.dump(scaler, 'scaler.pkl')

print("Model and encoders saved successfully.")

