const rates = require("./templates/myServiceTemplate/rates");
const extra_services = require("./templates/myServiceTemplate/extraServices");
const preferences = require("./templates/myServiceTemplate/preferences");
const dateAndTime = require("./templates/myServiceTemplate/dateAndTime");

const userData = {
  // RATES
  // BOARDING
  // rates_boarding_dog: rates.boarding.dog,
  rates_boarding_dog_holiday: rates.boarding.dog.holiday,
  rates_boarding_dog_length_of_stay: rates.boarding.dog.length_of_stay,
  rates_boarding_dog_regular: rates.boarding.dog.regular,

  // rates_boarding_cat: rates.boarding.cat,
  rates_boarding_cat_holiday: rates.boarding.cat.holiday,
  rates_boarding_cat_length_of_stay: rates.boarding.cat.length_of_stay,
  rates_boarding_cat_regular: rates.boarding.cat.regular,

  // rates_boarding_reptile: rates.boarding.reptile,
  rates_boarding_reptile_holiday: rates.boarding.reptile.holiday,
  rates_boarding_reptile_length_of_stay: rates.boarding.reptile.length_of_stay,
  rates_boarding_reptile_regular: rates.boarding.reptile.regular,

  // rates_boarding_bird: rates.boarding.bird,
  rates_boarding_bird_holiday: rates.boarding.bird.holiday,
  rates_boarding_bird_length_of_stay: rates.boarding.bird.length_of_stay,
  rates_boarding_bird_regular: rates.boarding.bird.regular,

  // rates_boarding_small_pets: rates.boarding.small_pets,
  rates_boarding_small_pets_holiday: rates.boarding.small_pets.holiday,
  rates_boarding_small_pets_length_of_stay:
    rates.boarding.small_pets.length_of_stay,
  rates_boarding_small_pets_regular: rates.boarding.small_pets.regular,

  // DAYCARE
  // rates_daycare_dog: rates.daycare.dog,
  rates_daycare_dog_holiday: rates.daycare.dog.holiday,
  rates_daycare_dog_length_of_stay: rates.daycare.dog.length_of_stay,
  rates_daycare_dog_regular: rates.daycare.dog.regular,

  // rates_daycare_cat: rates.daycare.cat,
  rates_daycare_cat_holiday: rates.daycare.cat.holiday,
  rates_daycare_cat_length_of_stay: rates.daycare.cat.length_of_stay,
  rates_daycare_cat_regular: rates.daycare.cat.regular,

  // rates_daycare_reptile: rates.daycare.reptile,
  rates_daycare_reptile_holiday: rates.daycare.reptile.holiday,
  rates_daycare_reptile_length_of_stay: rates.daycare.reptile.length_of_stay,
  rates_daycare_reptile_regular: rates.daycare.reptile.regular,

  // rates_daycare_bird: rates.daycare.bird,
  rates_daycare_bird_holiday: rates.daycare.bird.holiday,
  rates_daycare_bird_length_of_stay: rates.daycare.bird.length_of_stay,
  rates_daycare_bird_regular: rates.daycare.bird.regular,

  // rates_daycare_small_pets: rates.daycare.small_pets,
  rates_daycare_small_pets_holiday: rates.daycare.small_pets.holiday,
  rates_daycare_small_pets_length_of_stay:
    rates.daycare.small_pets.length_of_stay,
  rates_daycare_small_pets_regular: rates.daycare.small_pets.regular,

  // DROP_IN
  // rates_drop_in_dog: rates.drop_in.dog,
  rates_drop_in_dog_holiday: rates.drop_in.dog.holiday,
  rates_drop_in_dog_length_of_stay: rates.drop_in.dog.length_of_stay,
  rates_drop_in_dog_regular: rates.drop_in.dog.regular,

  // rates_drop_in_cat: rates.drop_in.cat,
  rates_drop_in_cat_holiday: rates.drop_in.cat.holiday,
  rates_drop_in_cat_length_of_stay: rates.drop_in.cat.length_of_stay,
  rates_drop_in_cat_regular: rates.drop_in.cat.regular,

  // rates_drop_in_reptile: rates.drop_in.reptile,
  rates_drop_in_reptile_holiday: rates.drop_in.reptile.holiday,
  rates_drop_in_reptile_length_of_stay: rates.drop_in.reptile.length_of_stay,
  rates_drop_in_reptile_regular: rates.drop_in.reptile.regular,

  // rates_drop_in_bird: rates.drop_in.bird,
  rates_drop_in_bird_holiday: rates.drop_in.bird.holiday,
  rates_drop_in_bird_length_of_stay: rates.drop_in.bird.length_of_stay,
  rates_drop_in_bird_regular: rates.drop_in.bird.regular,

  // rates_drop_in_small_pets: rates.drop_in.small_pets,
  rates_drop_in_small_pets_holiday: rates.drop_in.small_pets.holiday,
  rates_drop_in_small_pets_length_of_stay:
    rates.drop_in.small_pets.length_of_stay,
  rates_drop_in_small_pets_regular: rates.drop_in.small_pets.regular,

  // WALKING
  // rates_walking_dog: rates.drop_in.dog,
  rates_walking_dog_holiday: rates.walking.dog.holiday,
  rates_walking_dog_length_of_stay: rates.walking.dog.length_of_stay,
  rates_walking_dog_regular: rates.walking.dog.regular,

  // rates_walking_cat: rates.walking.cat,
  rates_walking_cat_holiday: rates.walking.cat.holiday,
  rates_walking_cat_length_of_stay: rates.walking.cat.length_of_stay,
  rates_walking_cat_regular: rates.walking.cat.regular,

  // rates_walking_reptile: rates.walking.reptile,
  rates_walking_reptile_holiday: rates.walking.reptile.holiday,
  rates_walking_reptile_length_of_stay: rates.walking.reptile.length_of_stay,
  rates_walking_reptile_regular: rates.walking.reptile.regular,

  // rates_walking_bird: rates.walking.bird,
  rates_walking_bird_holiday: rates.walking.bird.holiday,
  rates_walking_bird_length_of_stay: rates.walking.bird.length_of_stay,
  rates_walking_bird_regular: rates.walking.bird.regular,

  // rates_walking_small_pets: rates.walking.small_pets,
  rates_walking_small_pets_holiday: rates.walking.small_pets.holiday,
  rates_walking_small_pets_length_of_stay:
    rates.walking.small_pets.length_of_stay,
  rates_walking_small_pets_regular: rates.walking.small_pets.regular,

  // GROOMING
  rates_grooming_dog_bath_brush: rates.grooming.dog.bath_brush,
  rates_grooming_dog_bath_haircut: rates.grooming.dog.bath_haircut,
  rates_grooming_dog_bath_trim: rates.grooming.dog.bath_trim,
  rates_grooming_puppy_bath_brush: rates.grooming.puppy.bath_brush,
  rates_grooming_puppy_bath_haircut: rates.grooming.puppy.bath_haircut,
  rates_grooming_puppy_bath_trim: rates.grooming.puppy.bath_trim,
  rates_grooming_cat_bath_brush: rates.grooming.cat.bath_brush,
  rates_grooming_cat_bath_haircut: rates.grooming.cat.bath_haircut,
  rates_grooming_cat_bath_trim: rates.grooming.cat.bath_trim,
  rates_grooming_kitten_bath_brush: rates.grooming.kitten.bath_brush,
  rates_grooming_kitten_bath_haircut: rates.grooming.kitten.bath_haircut,
  rates_grooming_kitten_bath_trim: rates.grooming.kitten.bath_trim,

  // AQUARIST
  rates_aquarist_saltwater_maintaining_rate:
    rates.aquarist.saltwater.maintaining_rate,
  rates_aquarist_saltwater_package_rate: rates.aquarist.saltwater.package_rate,
  rates_aquarist_saltwater_setting_rate: rates.aquarist.saltwater.setting_rate,
  rates_aquarist_freshwater_maintaining_rate:
    rates.aquarist.freshwater.maintaining_rate,
  rates_aquarist_freshwater_package_rate:
    rates.aquarist.freshwater.package_rate,
  rates_aquarist_freshwater_setting_rate:
    rates.aquarist.freshwater.setting_rate,
  rates_aquarist_planted_tank_maintaining_rate:
    rates.aquarist.planted_tank.maintaining_rate,
  rates_aquarist_planted_tank_package_rate:
    rates.aquarist.planted_tank.package_rate,
  rates_aquarist_planted_tank_setting_rate:
    rates.aquarist.planted_tank.setting_rate,

  // EXTRA SERVICES
  // BOARDING
  extra_services_boarding_dog: extra_services.boarding.dog,
  extra_services_boarding_cat: extra_services.boarding.cat,
  extra_services_boarding_reptile: extra_services.boarding.reptile,
  extra_services_boarding_bird: extra_services.boarding.bird,
  extra_services_boarding_small_pets: extra_services.boarding.small_pets,
  // DAYCARE
  extra_services_daycare_dog: extra_services.daycare.dog,
  extra_services_daycare_cat: extra_services.daycare.cat,
  extra_services_daycare_reptile: extra_services.daycare.reptile,
  extra_services_daycare_bird: extra_services.daycare.bird,
  extra_services_daycare_small_pets: extra_services.daycare.small_pets,
  // DROP_IN
  extra_services_drop_in_dog: extra_services.drop_in.dog,
  extra_services_drop_in_cat: extra_services.drop_in.cat,
  extra_services_drop_in_reptile: extra_services.drop_in.reptile,
  extra_services_drop_in_bird: extra_services.drop_in.bird,
  extra_services_drop_in_small_pets: extra_services.drop_in.small_pets,
  // WALKING
  extra_services_walking_dog: extra_services.walking.dog,
  extra_services_walking_cat: extra_services.walking.cat,
  extra_services_walking_reptile: extra_services.walking.reptile,
  // GROOMING
  extra_services_grooming_dog: extra_services.grooming.dog,
  extra_services_grooming_puppy: extra_services.grooming.puppy,
  extra_services_grooming_cat: extra_services.grooming.cat,
  extra_services_grooming_kitten: extra_services.grooming.kitten,
  // AQUARIST
  extra_services_aquarist_saltwater: extra_services.aquarist.saltwater,
  extra_services_aquarist_freshwater: extra_services.aquarist.freshwater,
  extra_services_aquarist_planted_tank: extra_services.aquarist.planted_tank,
  // EXTRA SERVICES

  // PREFERENCES
  // BOARDING
  preferences_boarding_dog: preferences.boarding.dog,
  preferences_boarding_cat: preferences.boarding.cat,
  preferences_boarding_reptile: preferences.boarding.reptile,
  preferences_boarding_bird: preferences.boarding.bird,
  preferences_boarding_small_pets: preferences.boarding.small_pets,
  // DAYCARE
  preferences_daycare_dog: preferences.daycare.dog,
  preferences_daycare_cat: preferences.daycare.cat,
  preferences_daycare_reptile: preferences.daycare.reptile,
  preferences_daycare_bird: preferences.daycare.bird,
  preferences_daycare_small_pets: preferences.daycare.small_pets,
  // DROP_IN
  preferences_drop_in_dog: preferences.drop_in.dog,
  preferences_drop_in_cat: preferences.drop_in.cat,
  preferences_drop_in_reptile: preferences.drop_in.reptile,
  preferences_drop_in_bird: preferences.drop_in.bird,
  preferences_drop_in_small_pets: preferences.drop_in.small_pets,
  // WALKING
  preferences_walking_dog: preferences.walking.dog,
  preferences_walking_cat: preferences.walking.cat,
  preferences_walking_reptile: preferences.walking.reptile,
  // GROOMING
  preferences_grooming_dog: preferences.grooming.dog,
  preferences_grooming_puppy: preferences.grooming.puppy,
  preferences_grooming_cat: preferences.grooming.cat,
  preferences_grooming_kitten: preferences.grooming.kitten,
  // AQUARIST
  preferences_aquarist_saltwater: preferences.aquarist.saltwater,
  preferences_aquarist_freshwater: preferences.aquarist.freshwater,
  preferences_aquarist_planted_tank: preferences.aquarist.planted_tank,

  // DATE_AND_TIME
  dateAndTime_boarding: dateAndTime.boarding,
  dateAndTime_daycare: dateAndTime.daycare,
  dateAndTime_drop_in: dateAndTime.drop_in,
  dateAndTime_walking: dateAndTime.walking,
  dateAndTime_grooming: dateAndTime.grooming,
  dateAndTime_training: dateAndTime.training,
  dateAndTime_aquarist: dateAndTime.aquarist,

  // DATE_AND_TIME

  // SERVICE_MENU
  // TODO: figure out a way to balance UI state and actual user data for sorting
  serviceMenu_dog: {
    enabled: true,
    bath_hair_cut: true,
    bath_trim: true,
    bath_brush: true,
  },
  serviceMenu_puppy: {
    enabled: true,
    bath_trim: true,
    bath_brush: true,
  },
  serviceMenu_cat: {
    enabled: true,
    bath_hair_cut: true,
    bath_trim: true,
    bath_brush: true,
  },
  serviceMenu_kitten: {
    enabled: true,
    bath_trim: true,
    bath_brush: true,
  },
  // SERVICE_MENU

  // TRAINING_COURSES
  training_courses_dog: {
    private: [],
    group: [],
  },
  training_courses_cat: {
    private: [],
    group: [],
  },
  training_courses_bird: {
    private: [],
    group: [],
  },
};

exports.userData = userData;
