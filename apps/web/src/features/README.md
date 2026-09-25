# Features Directory (`src/features`)

## Purpose
This folder organizes application features by domain rather than purely technical layer.

## Future Feature Modules
- `assistance/`: Emergency request workflows, issue triage, dynamic vehicle diagnostic questions.
- `services-catalog/`: Mechanic, Towing, Puncture, Battery, EV charging, Fuel delivery service browse.
- `tracking/`: Live provider tracking, ETA updates, communication card.
- `profile/`: User vehicle garage, saved contact points, emergency contacts.

## Feature Structure Convention
```
features/
└── <feature-name>/
    ├── components/
    ├── hooks/
    ├── services/
    ├── utils/
    └── index.js
```
