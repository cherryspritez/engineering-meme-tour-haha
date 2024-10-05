var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.48984589166023973,
        "pitch": 0.16159501092024442,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.0795319457291086,
          "pitch": -0.2897701883000199,
          "rotation": 12.566370614359176,
          "target": "2-engineering-building"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7547024720765343,
          "pitch": 0.09466463172548245,
          "title": "Why is the chicken rice at Technoedge is yummy??",
          "text": "My friend say that the Taiwanese chicken chop at dah Taiwanese store is hard on the outside and harder on the inside :("
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.0204352182815306,
        "pitch": -0.10473986772852584,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 3.0614271913093365,
          "pitch": 0.05478167814231405,
          "rotation": 0,
          "target": "2-engineering-building"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9670056984649502,
          "pitch": -0.13399873594649492,
          "title": "Why did they close down??",
          "text": "Spinelli more like non-existent lmao"
        }
      ]
    },
    {
      "id": "2-engineering-building",
      "name": "Engineering Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.24042800920330265,
        "pitch": -0.14525213219820543,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.030203336068815645,
          "pitch": 0.03451019938216682,
          "rotation": 12.566370614359176,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.6954126384778405,
          "pitch": 0.03345491991943561,
          "rotation": 18.06415775814132,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1660641813858916,
          "pitch": -0.13762335600550735,
          "title": "What does this statue even mean?!?!?!?!?!111??",
          "text": "Looks like the spiral pasta (fusilli or something I'm not Italian) at the overpriced Utown salad shop"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering Tour!!",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
