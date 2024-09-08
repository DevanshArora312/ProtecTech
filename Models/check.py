

import joblib


loaded_model = joblib.load('safety_model.pkl')


loaded_label_encoder_state = joblib.load('label_encoder_state.pkl')
loaded_label_encoder_day_night = joblib.load('label_encoder_day_night.pkl')
loaded_scaler = joblib.load('scaler.pkl')

print("Model and encoders loaded successfully.")

def predict_safety_loaded_model(state_name, day_night, population_density, nearest_police_station):
   
   
    encoded_state = loaded_label_encoder_state.transform([state_name])[0]
    encoded_day_night = loaded_label_encoder_day_night.transform([day_night])[0]

 
    scaled_population_density = loaded_scaler.transform([[population_density, nearest_police_station]])[0][0]
    scaled_nearest_police_station = loaded_scaler.transform([[population_density, nearest_police_station]])[0][1]

   
    input_data = [[encoded_state, encoded_day_night, scaled_population_density, scaled_nearest_police_station]]
    
   
    prediction = loaded_model.predict(input_data)[0]
    
    
    safety_status = "Safe" if prediction == 1 else "Not Safe"
    
    return safety_status


print(predict_safety_loaded_model("Andhra Pradesh", "Night", 15000, 3.5))
