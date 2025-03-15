# Algerian Forest Fire Prediction

A machine learning-based application for predicting forest fires in Algeria using historical data and environmental factors.

## Features

- Machine Learning model for forest fire prediction
- Interactive web interface for predictions
- Data visualization and analysis
- RESTful API for model inference

## Algerian Forest Fires Dataset 

The dataset includes 244 instances that regroup a data of two regions of Algeria, namely the Bejaia region located in the northeast of Algeria and the Sidi Bel-abbes region located in the northwest of Algeria.

- 122 instances for each region
- Period: June 2012 to September 2012
- 11 attributes and 1 output attribute (class)
- 244 instances classified into: fire (138 classes) and not fire (106 classes)

### Attribute Information:

1. **Date**: (DD/MM/YYYY) Day, month ('june' to 'september'), year (2012)

**Weather Data Observations:**
2. **Temp**: Temperature noon (temperature max) in Celsius degrees: 22 to 42
3. **RH**: Relative Humidity in %: 21 to 90
4. **Ws**: Wind speed in km/h: 6 to 29
5. **Rain**: Total day in mm: 0 to 16.8

**FWI Components:**
6. **FFMC**: Fine Fuel Moisture Code index from the FWI system: 28.6 to 92.5
7. **DMC**: Duff Moisture Code index from the FWI system: 1.1 to 65.9
8. **DC**: Drought Code index from the FWI system: 7 to 220.4
9. **ISI**: Initial Spread Index index from the FWI system: 0 to 18.5
10. **BUI**: Buildup Index index from the FWI system: 1.1 to 68
11. **FWI**: Fire Weather Index: 0 to 31.1
12. **Classes**: two classes, namely Fire and not Fire

## Tech Stack

### Backend
- Python
- FastAPI
- Poetry for dependency management
- Machine Learning libraries (scikit-learn, pandas, etc.)

### Frontend
- React.js
- Node.js
- Modern UI components

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- Poetry (Python package manager)
- npm (Node.js package manager)

## Acknowledgments

- Algerian Forest Fires Dataset contributors
- Scientific research papers on forest fire prediction
- Open source community for tools and libraries
