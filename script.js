TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "label": "drone1",
  "partial": false,
  "id": "panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DB7ADA05_C7F4_4845_41C5_6840C29968A7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.79,
        "yaw": -8.38,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "data": {
       "label": "right_drone"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -8.38,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.05
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_E3AC1222_C795_D87F_41DC_8AD6F2C31684",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.4,
        "yaw": -8.07,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.4
       }
      ],
      "items": [
       {
        "yaw": -8.07,
        "hfov": 12.4,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.4
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Drone view"
      },
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DA8577E7_C7FC_47C5_41D5_87D379C8FF30",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.79,
        "yaw": -174.6,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "data": {
       "label": "left_drone"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -174.6,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.03
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EEA09351_C79C_78DD_4180_1BB869DB4BE7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12,
        "yaw": -174.48,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.21
       }
      ],
      "items": [
       {
        "yaw": -174.48,
        "hfov": 12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 142,
           "width": 136,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.21
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Drone view"
      },
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_t.jpg"
 },
 {
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "buttonCardboardView": "this.IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "id": "panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.47,
   "pitch": -11.01
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "drone2",
  "partial": false,
  "id": "panorama_B4850F51_BF98_2543_41C9_38D43C10D640",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DA33AF78_C7FC_48CB_41BF_2A01808519B6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.79,
        "yaw": -11.06,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.2
       }
      ],
      "items": [
       {
        "yaw": -11.06,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.2
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EF5EF8E6_C797_C9C7_41D2_C054539A52FF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.29,
        "yaw": -11.04,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.45
       }
      ],
      "items": [
       {
        "yaw": -11.04,
        "hfov": 12.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 140,
           "width": 139,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.45
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Drone view"
      },
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_t.jpg"
 },
 {
  "id": "panorama_B4850F51_BF98_2543_41C9_38D43C10D640_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 29.46,
   "pitch": -9.01
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "drone3",
  "partial": false,
  "id": "panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DADA6B39_C7FC_484D_41E4_485FEBCDAAE7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.79,
        "yaw": 174.75,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.99
       }
      ],
      "items": [
       {
        "yaw": 174.75,
        "hfov": 8.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.99
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_EEFAD97A_C7AC_48CF_41DD_9AA6EDCCBE54",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.91,
        "yaw": 174.58,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.38
       }
      ],
      "items": [
       {
        "yaw": 174.58,
        "hfov": 11.91,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.38
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Drone view"
      },
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_t.jpg"
 },
 {
  "id": "panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 139.63,
   "pitch": -16.45
  },
  "class": "PanoramaCamera"
 },
 {
  "partial": false,
  "id": "panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68, this.camera_C78EE423_EB08_6378_41BE_7EDC8D00AF07); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_A9AB05F1_BFA8_6542_41DC_775CA36036CD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.37,
        "yaw": -0.03,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 36,
           "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.2
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_C7BCC41B_EB08_6348_41E4_6D0DDF3B3994); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_DE1C8E1A_C7F5_C84C_41C7_EF30AC323673",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.58,
        "yaw": -89.65,
        "image": {
         "levels": [
          {
           "height": 44,
           "width": 66,
           "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.13
       }
      ],
      "enabledInCardboard": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_t.jpg"
   }
  ],
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "partial": false,
     "id": "panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
     "pitch": 0,
     "hfovMax": 110,
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6, this.camera_C086A313_EB08_6558_41C4_5A8C9824F688); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_DD9531CC_C7F4_BBCB_41CA_D5970CEE328B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.33,
           "yaw": 90.36,
           "image": {
            "levels": [
             {
              "height": 47,
              "width": 64,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -19.05
          }
         ],
         "enabledInCardboard": true,
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_EE454CED_C7AD_C9C5_41CE_1B6D0CD0DD10)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_EDEC8139_C7B4_F84C_41A9_87FD82C9CA5C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 25.93,
           "yaw": -88.8,
           "image": {
            "levels": [
             {
              "height": 150,
              "width": 150,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.48
          }
         ],
         "items": [
          {
           "yaw": -88.8,
           "hfov": 25.93,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 300,
              "width": 300,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.48
          }
         ],
         "data": {
          "label": "enter_inside"
         },
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C08B1327_EB08_6578_41E1_B02D1CEB29EE); this.mainPlayList.set('selectedIndex', 13)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_EC92F581_C7B4_783D_41E1_7FFA97E9C185",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 30.25,
           "yaw": -88.66,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_3_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.54
          }
         ],
         "items": [
          {
           "yaw": -88.66,
           "hfov": 30.25,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 358,
              "width": 346,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.54
          }
         ],
         "enabledInCardboard": true,
         "data": {
          "label": "Enter Inside"
         },
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_t.jpg"
      }
     ],
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
       "yaw": 90.36,
       "backwardYaw": -89.65,
       "class": "AdjacentPanorama"
      },
      {
       "distance": 1,
       "panorama": {
        "vfov": 180,
        "partial": false,
        "id": "panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
        "mapLocations": [
         {
          "x": 426,
          "map": {
           "overlays": [
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 13)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_D7EE3829_E2DE_790F_41E8_5237CA875096",
             "map": {
              "offsetY": 0,
              "x": 406.14,
              "width": 40,
              "y": 499.94,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "hallway_1"
             },
             "image": {
              "x": 406,
              "y": 499.8,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 40,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 14)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_A2787109_E2D6_0B0F_41C8_FDE72A492E89",
             "map": {
              "offsetY": 0,
              "x": 408.94,
              "width": 40,
              "y": 362.34,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_2_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "hallway_2"
             },
             "image": {
              "x": 408.8,
              "y": 362.25,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 40,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_2.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 15)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_F2F5DCB2_E342_4B08_41DA_4BA0253E2C0A",
             "map": {
              "offsetY": 0,
              "x": 339.64,
              "width": 40,
              "y": 362.81,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 19,
                 "width": 19,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_4_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "bathroom"
             },
             "image": {
              "x": 339.5,
              "y": 362.7,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 39,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_4.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 20)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_ED87BC37_E343_CB08_41DD_1BB3DEA1E594",
             "map": {
              "offsetY": 0,
              "x": 187.79,
              "width": 40,
              "y": 377.25,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 19,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_5_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "living_1"
             },
             "image": {
              "x": 187.65,
              "y": 377.2,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_5.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 21)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_A58D9201_E32A_08FF_41CE_640A668AD86D",
             "map": {
              "offsetY": 0,
              "x": 247.91,
              "width": 40,
              "y": 463.66,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_3_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "living_2"
             },
             "image": {
              "x": 247.8,
              "y": 463.55,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 40,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_3.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 19)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_F3343553_E34E_C50F_4194_2CCEA9500751",
             "map": {
              "offsetY": 0,
              "x": 226.07,
              "width": 40,
              "y": 276.07,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 19,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_6_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "dinning room"
             },
             "image": {
              "x": 225.95,
              "y": 276,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_6.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 18)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_ECBF5818_E346_4B07_41CB_64188A829162",
             "map": {
              "offsetY": 0,
              "x": 311.75,
              "width": 40,
              "y": 206.3,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 19,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_7_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "kitchen"
             },
             "image": {
              "x": 311.55,
              "y": 206.2,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_7.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 16)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_F38C1461_E342_3B08_41C0_3A8E60BD838F",
             "map": {
              "offsetY": 0,
              "x": 422.59,
              "width": 40,
              "y": 240.58,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_8_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "common_area"
             },
             "image": {
              "x": 422.45,
              "y": 240.45,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 40,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_8.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 17)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_F1E8C3F3_E346_5D08_41E2_EFE0F9734EF9",
             "map": {
              "offsetY": 0,
              "x": 608.32,
              "width": 40,
              "y": 177.28,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 19,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_9_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "fireplace"
             },
             "image": {
              "x": 608.2,
              "y": 177.15,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 39,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_9.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            },
            {
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 22)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "id": "overlay_DC356AAA_E2DA_790D_41E7_B70860BFF034",
             "map": {
              "offsetY": 0,
              "x": 468.19,
              "width": 40,
              "y": 500.21,
              "height": 40,
              "offsetX": 0,
              "image": {
               "levels": [
                {
                 "height": 20,
                 "width": 20,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_1_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotMapOverlayMap"
             },
             "useHandCursor": true,
             "data": {
              "label": "staircase_1"
             },
             "image": {
              "x": 468.05,
              "y": 500.1,
              "class": "HotspotMapOverlayImage",
              "width": 40,
              "height": 40,
              "image": {
               "levels": [
                {
                 "height": 40,
                 "width": 40,
                 "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_1.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             },
             "rollOverDisplay": false,
             "class": "AreaHotspotMapOverlay"
            }
           ],
           "thumbnailUrl": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_t.png",
           "fieldOfViewOverlayInsideOpacity": 0.6,
           "width": 920,
           "fieldOfViewOverlayInsideColor": "#FFFFFF",
           "height": 690,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "minimumZoomFactor": 1,
           "image": {
            "levels": [
             {
              "height": 690,
              "width": 920,
              "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E.png",
              "class": "ImageResourceLevel"
             },
             {
              "height": 345,
              "grayscale": true,
              "width": 460,
              "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_lq.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "id": "map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
           "label": "Downstairs",
           "maximumZoomFactor": 1,
           "scaleMode": "fit_to_width",
           "class": "Map",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "initialZoomFactor": 1,
           "fieldOfViewOverlayRadiusScale": 0.08
          },
          "angle": 90.68,
          "y": 519.8,
          "class": "PanoramaMapLocation"
         }
        ],
        "pitch": 0,
        "hfovMax": 110,
        "hfov": 360,
        "class": "Panorama",
        "hfovMin": 60,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_EE6DCD16_C7AD_C847_41D4_83BB50433155)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EC4DD168_C7B4_F8CB_41DF_818874AE6A20",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 26,
              "yaw": 88.93,
              "image": {
               "levels": [
                {
                 "height": 149,
                 "width": 149,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.6
             }
            ],
            "items": [
             {
              "yaw": 88.93,
              "hfov": 26,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 299,
                 "width": 299,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.6
             }
            ],
            "data": {
             "label": "go_outside"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_C2CCC1B2_EB08_6558_41E4_1F4EB33228B2); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_EC6BFDE8_C7BC_4BCB_41CA_CC33FEE500E3",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 29.22,
              "yaw": 89.44,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_2_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.45
             }
            ],
            "items": [
             {
              "yaw": 89.44,
              "hfov": 29.22,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 342,
                 "width": 334,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.45
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "Go Outside"
            },
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C2F001A0_EB08_6579_41E5_5B59978EC2BB); this.mainPlayList.set('selectedIndex', 14)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_C6A442B2_C868_7CA3_41E3_BD3A98166ACB",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 15.08,
              "yaw": -87.13,
              "image": {
               "levels": [
                {
                 "height": 61,
                 "width": 86,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_3_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -22.35
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "to bathroom"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A, this.camera_C2D9C1C4_EB08_6538_41E5_11D1D1262DB6); this.mainPlayList.set('selectedIndex', 22)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_C7D89F69_C868_A5AE_41DB_8E0BC484A451",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 28.89,
              "yaw": 1.63,
              "image": {
               "levels": [
                {
                 "height": 132,
                 "width": 167,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_4_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -37.83
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "to stairs"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28, this.camera_C2D231BC_EB08_6548_41C6_58408D44B0F3); this.mainPlayList.set('selectedIndex', 21)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_D8640DBD_C869_E4A6_41E4_9C0057C534D0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.1,
              "yaw": -162.94,
              "image": {
               "levels": [
                {
                 "height": 17,
                 "width": 16,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_5_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -15.62
             }
            ],
            "items": [
             {
              "yaw": -162.94,
              "hfov": 13.1,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 166,
                 "width": 154,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -15.62
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "Living Room"
            },
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C2F941AA_EB08_6548_41E6_C7171E87C88B); this.mainPlayList.set('selectedIndex', 16)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_DDFECE2F_C8D9_E7A2_41E3_D89E88412FBF",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.99,
              "yaw": -86.31,
              "image": {
               "levels": [
                {
                 "height": 31,
                 "width": 45,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_6_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.51
             }
            ],
            "enabledInCardboard": true,
            "data": {
             "label": "to common area"
            },
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_t.jpg"
         }
        ],
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "vfov": 180,
           "partial": false,
           "id": "panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
           "mapLocations": [
            {
             "x": 428.8,
             "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
             "angle": 90.03,
             "y": 382.25,
             "class": "PanoramaMapLocation"
            }
           ],
           "pitch": 0,
           "hfovMax": 110,
           "hfov": 360,
           "class": "Panorama",
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C1E2F24B_EB08_67C8_41E6_B66138E33521); this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_C7EC47D3_C878_64E2_41DB_20F9D6EA587D",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.44,
                 "yaw": 92.85,
                 "image": {
                  "levels": [
                   {
                    "height": 64,
                    "width": 82,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_0_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -22.25
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "to exit"
               },
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D9CBE033_C868_9BA2_41BB_B44007B1A544",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 25.83,
                 "yaw": 178.36,
                 "image": {
                  "levels": [
                   {
                    "height": 150,
                    "width": 150,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.61
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "data": {
                "label": "to bathroom"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 178.36,
                 "hfov": 25.83,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 300,
                    "width": 300,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.61
                }
               ]
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD, this.camera_C1902243_EB08_6738_41C8_F228CE0D9CFC); this.mainPlayList.set('selectedIndex', 15)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D9CDA913_C868_6D62_41DD_5860BCF1BF8A",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 29.53,
                 "yaw": 178.12,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_2_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -8.14
                }
               ],
               "items": [
                {
                 "yaw": 178.12,
                 "hfov": 29.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 355,
                    "width": 339,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -8.14
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "Washroom"
               },
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C18F8239_EB08_6748_41E4_09C32D6211B4); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_DABEFFE5_C869_E4A6_41E0_E5163FDBAC92",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 15.49,
                 "yaw": -85.65,
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 88,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_3_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -23.43
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "to common area"
               },
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C1F77255_EB08_67D8_41B1_93EDA4BDBE42); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_DB538EFD_C8A8_64A6_41AB_A23A93164615",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.19,
                 "yaw": -118.88,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 17,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_4_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -14.64
                }
               ],
               "items": [
                {
                 "yaw": -118.88,
                 "hfov": 13.19,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 144,
                    "width": 155,
                    "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -14.64
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "Kitchen"
               },
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_t.jpg"
            }
           ],
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "vfov": 180,
              "partial": false,
              "id": "panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
              "mapLocations": [
               {
                "x": 442.45,
                "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                "angle": 85.78,
                "y": 260.45,
                "class": "PanoramaMapLocation"
               }
              ],
              "pitch": 0,
              "hfovMax": 110,
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F, this.camera_C050E2DD_EB08_64C8_41D5_237907EF4957); this.mainPlayList.set('selectedIndex', 17)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DCCB6E15_C8A8_A761_41E7_F86707BF82F5",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.33,
                    "yaw": -18.41,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 18,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.82
                   }
                  ],
                  "items": [
                   {
                    "yaw": -18.41,
                    "hfov": 11.33,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 116,
                       "width": 132,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.82
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Fireplace"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C07CE2BB_EB08_6748_41D1_CE278CCFFCE2); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DD4C43A9_C8D8_7CAE_41E8_4BFD85CDB2C0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.66,
                    "yaw": 94.45,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 17,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -21.13
                   }
                  ],
                  "items": [
                   {
                    "yaw": 94.45,
                    "hfov": 14.66,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 167,
                       "width": 178,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -21.13
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Hallway"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C0A2E2F1_EB08_64D8_41E4_900ED7D07221); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DD194812_C8D8_AB62_41B4_E97BDA40E34C",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.38,
                    "yaw": 93.62,
                    "image": {
                     "levels": [
                      {
                       "height": 32,
                       "width": 47,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_2_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -11.4
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "to exit"
                  },
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C0B4E2FF_EB08_64C8_41BF_9B88562BB089); this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DDB84FBE_C8D8_64A3_41A1_1535C841E530",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.69,
                    "yaw": -166.01,
                    "image": {
                     "levels": [
                      {
                       "height": 17,
                       "width": 16,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_3_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -25.98
                   }
                  ],
                  "items": [
                   {
                    "yaw": -166.01,
                    "hfov": 17.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 239,
                       "width": 223,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -25.98
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Kitchen"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C04EE2CA_EB08_64C8_41B5_FDC3D8D7BD24); this.mainPlayList.set('selectedIndex', 19)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DDC66908_C8E9_AD6F_41C1_C3E0F3939DD5",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.12,
                    "yaw": 169.1,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 25,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_4_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.91
                   }
                  ],
                  "items": [
                   {
                    "yaw": 169.1,
                    "hfov": 13.12,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 97,
                       "width": 153,
                       "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.91
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Dinning Room"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_t.jpg"
               }
              ],
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
                "yaw": 94.45,
                "backwardYaw": -85.65,
                "class": "AdjacentPanorama"
               },
               {
                "distance": 1,
                "panorama": {
                 "vfov": 180,
                 "partial": false,
                 "id": "panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
                 "mapLocations": [
                  {
                   "x": 245.95,
                   "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                   "angle": 88.72,
                   "y": 296,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "pitch": 0,
                 "hfovMax": 110,
                 "hfov": 360,
                 "class": "Panorama",
                 "hfovMin": 60,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C7491400_EB08_6338_41CE_9E5E67EE60A0); this.mainPlayList.set('selectedIndex', 18)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D06BA504_C8F8_A566_41E0_253FC01B6334",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 9.7,
                       "yaw": -26.72,
                       "image": {
                        "levels": [
                         {
                          "height": 66,
                          "width": 55,
                          "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_0_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -24.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "kitchen"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C74713F7_EB08_64D8_41C8_C396AC443A32); this.mainPlayList.set('selectedIndex', 16)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D126A7FB_C8F8_64A2_41C7_3659544DBF6F",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.55,
                       "yaw": -11.11,
                       "image": {
                        "levels": [
                         {
                          "height": 42,
                          "width": 60,
                          "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_1_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.99
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "common area"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830, this.camera_C758C409_EB08_634B_41D8_42DBB22F96BA); this.mainPlayList.set('selectedIndex', 20)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D199FDF7_C8F8_A4A1_41D0_CC60F0CEAB75",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 20.64,
                       "yaw": 109.13,
                       "image": {
                        "levels": [
                         {
                          "height": 15,
                          "width": 19,
                          "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_2_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -27
                      }
                     ],
                     "items": [
                      {
                       "yaw": 109.13,
                       "hfov": 20.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 214,
                          "width": 263,
                          "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -27
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Living Room"
                     },
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay"
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_t.jpg"
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                   "yaw": -11.11,
                   "backwardYaw": 169.1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "vfov": 180,
                    "partial": false,
                    "id": "panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                    "mapLocations": [
                     {
                      "x": 331.55,
                      "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                      "angle": 92.79,
                      "y": 226.2,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 110,
                    "hfov": 360,
                    "class": "Panorama",
                    "hfovMin": 60,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F, this.camera_C17C2205_EB08_6738_41DF_439A669C5D66); this.mainPlayList.set('selectedIndex', 17)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D00E3D7C_C8E8_65A6_41C9_649BA37A422C",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.96,
                          "yaw": -7.74,
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 19,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.73
                         }
                        ],
                        "items": [
                         {
                          "yaw": -7.74,
                          "hfov": 7.96,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 74,
                             "width": 91,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -9.73
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Fireplace"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C11901F2_EB08_64D8_41E0_EC0549FDB6B0); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_DF666A85_C8F8_6F66_41BC_51D9D252EB6B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 20.55,
                          "yaw": 13.83,
                          "image": {
                           "levels": [
                            {
                             "height": 89,
                             "width": 118,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -30.63
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "common area"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C16BD1FC_EB08_64C8_41DD_680482543527); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_DFC923E7_C8F8_BCA1_41E3_B56F500B552F",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.45,
                          "yaw": 146.26,
                          "image": {
                           "levels": [
                            {
                             "height": 64,
                             "width": 53,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_2_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.84
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "dinning room"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C14EF20D_EB08_6748_41D8_CB90B3483926); this.mainPlayList.set('selectedIndex', 14)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D01FC02F_C8FF_BBA2_41CD_2ECB5189F3F5",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.12,
                          "yaw": 60.88,
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 17,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_3_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -15.83
                         }
                        ],
                        "items": [
                         {
                          "yaw": 60.88,
                          "hfov": 11.12,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 121,
                             "width": 131,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -15.83
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Hallway"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.showWindow(this.window_D17E7E73_DE1A_39BD_41D9_B9C0FB7A6DAD, null, false)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CF9DC2CB_DE1A_0EEC_41C6_FB321C512293",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 23.57,
                          "yaw": -56.47,
                          "image": {
                           "levels": [
                            {
                             "height": 85,
                             "width": 136,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_5_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -10.85
                         }
                        ],
                        "items": [
                         {
                          "yaw": -56.47,
                          "hfov": 23.57,
                          "class": "HotspotPanoramaOverlayImage",
                          "roll": 0,
                          "image": {
                           "levels": [
                            {
                             "height": 171,
                             "width": 272,
                             "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_5_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -10.85
                         }
                        ],
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_t.jpg"
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                      "yaw": 13.83,
                      "backwardYaw": -166.01,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
                      "yaw": 146.26,
                      "backwardYaw": -26.72,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
                       "mapLocations": [
                        {
                         "x": 628.2,
                         "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                         "angle": 90.69,
                         "y": 197.15,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C6B104BF_EB08_6348_41D0_54748DA1C9C2); this.mainPlayList.set('selectedIndex', 16)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DE25A2EE_C8E8_9CA3_41E5_3C284E6ECBB1",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 11.01,
                             "yaw": 161.22,
                             "image": {
                              "levels": [
                               {
                                "height": 43,
                                "width": 62,
                                "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_0_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -16.13
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "common area"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C68074C9_EB08_6CC8_41E7_675AB9646076); this.mainPlayList.set('selectedIndex', 18)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D106A124_C8E8_7DA7_41E0_3900EF60E623",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.42,
                             "yaw": 172.18,
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 17,
                                "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.66
                            }
                           ],
                           "items": [
                            {
                             "yaw": 172.18,
                             "hfov": 7.42,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 78,
                                "width": 85,
                                "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.66
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Kitchen"
                           },
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "autoplay": true,
                           "vfov": 11.78,
                           "video": {
                            "mp4Url": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C.mp4",
                            "height": 1080,
                            "width": 1080,
                            "class": "VideoResource"
                           },
                           "id": "overlay_F3C1DC14_EB08_A358_41DA_B75E3A8EEAF9",
                           "rotationX": 15.16,
                           "roll": -0.46,
                           "image": {
                            "levels": [
                             {
                              "height": 1080,
                              "width": 1080,
                              "url": "media/overlay_F3C1DC14_EB08_A358_41DA_B75E3A8EEAF9_t.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "rotationY": -4.29,
                           "loop": true,
                           "pitch": -15.2,
                           "enabledInCardboard": true,
                           "yaw": -3.35,
                           "hfov": 11.86,
                           "class": "VideoPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                         "yaw": 161.22,
                         "backwardYaw": -18.41,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                         "yaw": 172.18,
                         "backwardYaw": -7.74,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "5_fireplace",
                       "thumbnailUrl": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_t.jpg"
                      },
                      "yaw": -7.74,
                      "backwardYaw": 172.18,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
                      "yaw": 60.88,
                      "backwardYaw": -118.88,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "label": "6_kitchen",
                    "thumbnailUrl": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_t.jpg"
                   },
                   "yaw": -26.72,
                   "backwardYaw": 146.26,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "vfov": 180,
                    "partial": false,
                    "id": "panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
                    "mapLocations": [
                     {
                      "x": 207.65,
                      "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                      "angle": 93.35,
                      "y": 397.2,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 110,
                    "hfov": 360,
                    "class": "Panorama",
                    "hfovMin": 60,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28, this.camera_C1BAC231_EB08_6758_41E2_305D6024A044); this.mainPlayList.set('selectedIndex', 21)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D105B1AF_C8E9_BCA1_41D4_9572AA11B75D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 18.92,
                          "yaw": 52.43,
                          "image": {
                           "levels": [
                            {
                             "height": 83,
                             "width": 108,
                             "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_0_HS_0_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -27.35
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C1A88228_EB08_6748_4197_F36B3078732D); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_D236BEFE_C8E8_64A2_41D9_57BC127829F2",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 20.11,
                          "yaw": -71.21,
                          "image": {
                           "levels": [
                            {
                             "height": 87,
                             "width": 115,
                             "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -30.37
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "dinning room"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "autoplay": true,
                        "vfov": 23.85,
                        "video": {
                         "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
                         "height": 1080,
                         "width": 1920,
                         "class": "VideoResource"
                        },
                        "id": "overlay_D0530539_DE0A_0BAD_41EB_81D3E2A6719D",
                        "rotationX": -4.21,
                        "roll": -2.91,
                        "image": {
                         "levels": [
                          {
                           "height": 1080,
                           "width": 1920,
                           "url": "media/overlay_D0530539_DE0A_0BAD_41EB_81D3E2A6719D_t.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "rotationY": 42.61,
                        "loop": true,
                        "pitch": 2.84,
                        "enabledInCardboard": true,
                        "yaw": -2.31,
                        "hfov": 39.92,
                        "class": "VideoPanoramaOverlay"
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_t.jpg"
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
                      "yaw": -71.21,
                      "backwardYaw": 109.13,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
                       "mapLocations": [
                        {
                         "x": 267.8,
                         "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                         "angle": 89.22,
                         "y": 483.55,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C018A29B_EB08_6748_41BB_380DC810CBE3); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D9E8038E_C878_BD62_41E6_BEFB99E208D6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 13.34,
                             "yaw": 16.97,
                             "image": {
                              "levels": [
                               {
                                "height": 48,
                                "width": 76,
                                "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_0_HS_0_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -19.67
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "to exit"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830, this.camera_C06AD2A4_EB08_6778_41C3_0032A3A4EBBB); this.mainPlayList.set('selectedIndex', 20)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_D26E4F15_C8E8_6566_41BE_BE75F5E1452B",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 18.64,
                             "yaw": -127.57,
                             "image": {
                              "levels": [
                               {
                                "height": 77,
                                "width": 107,
                                "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_0_HS_1_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -28.09
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "autoplay": true,
                           "vfov": 20.44,
                           "video": {
                            "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
                            "height": 1080,
                            "width": 1920,
                            "class": "VideoResource"
                           },
                           "id": "overlay_D02B2BDB_DE0A_3EEC_41E2_28ADFD594549",
                           "rotationX": -2.65,
                           "roll": 1.93,
                           "image": {
                            "levels": [
                             {
                              "height": 2,
                              "width": 2,
                              "url": "media/overlay_D02B2BDB_DE0A_3EEC_41E2_28ADFD594549_t.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "rotationY": -36.85,
                           "loop": true,
                           "pitch": 2.51,
                           "enabledInCardboard": true,
                           "yaw": -82.52,
                           "hfov": 34.62,
                           "class": "VideoPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
                         "yaw": 16.97,
                         "backwardYaw": -162.94,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
                         "yaw": -127.57,
                         "backwardYaw": 52.43,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "9_dining_room",
                       "thumbnailUrl": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_t.jpg"
                      },
                      "yaw": 52.43,
                      "backwardYaw": -127.57,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "label": "8_dining_room",
                    "thumbnailUrl": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_t.jpg"
                   },
                   "yaw": 109.13,
                   "backwardYaw": -71.21,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "label": "7_dining_room",
                 "thumbnailUrl": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_t.jpg"
                },
                "yaw": 169.1,
                "backwardYaw": -11.11,
                "class": "AdjacentPanorama"
               },
               {
                "distance": 1,
                "panorama": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
                "yaw": -18.41,
                "backwardYaw": 161.22,
                "class": "AdjacentPanorama"
               },
               {
                "distance": 1,
                "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
                "yaw": 93.62,
                "backwardYaw": -86.31,
                "class": "AdjacentPanorama"
               },
               {
                "distance": 1,
                "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                "yaw": -166.01,
                "backwardYaw": 13.83,
                "class": "AdjacentPanorama"
               }
              ],
              "label": "4_hallway",
              "thumbnailUrl": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_t.jpg"
             },
             "yaw": -85.65,
             "backwardYaw": 94.45,
             "class": "AdjacentPanorama"
            },
            {
             "distance": 1,
             "panorama": {
              "vfov": 180,
              "partial": false,
              "id": "panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
              "mapLocations": [
               {
                "x": 359.5,
                "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                "angle": 88.32,
                "y": 382.7,
                "class": "PanoramaMapLocation"
               }
              ],
              "pitch": 0,
              "hfovMax": 110,
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DB28A810_C8A8_AB7E_41D3_AD17C52DC956",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.2,
                    "yaw": -1.79,
                    "image": {
                     "levels": [
                      {
                       "height": 100,
                       "width": 100,
                       "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -11.9
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -1.79,
                    "hfov": 17.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 200,
                       "width": 200,
                       "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -11.9
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C62F5464_EB08_63F8_41D4_DFC63E208EEB); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_DC8B6013_C8A9_9B61_41CF_9495ACCED324",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 25.13,
                    "yaw": -1.32,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 19,
                       "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.1
                   }
                  ],
                  "items": [
                   {
                    "yaw": -1.32,
                    "hfov": 25.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 242,
                       "width": 289,
                       "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.1
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Exit Washroom"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_t.jpg"
               }
              ],
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
                "yaw": -1.32,
                "backwardYaw": 178.12,
                "class": "AdjacentPanorama"
               }
              ],
              "label": "3_1_hallway_bathroom",
              "thumbnailUrl": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_t.jpg"
             },
             "yaw": 178.12,
             "backwardYaw": -1.32,
             "class": "AdjacentPanorama"
            },
            {
             "distance": 1,
             "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
             "yaw": 92.85,
             "backwardYaw": -87.13,
             "class": "AdjacentPanorama"
            },
            {
             "distance": 1,
             "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
             "yaw": -118.88,
             "backwardYaw": 60.88,
             "class": "AdjacentPanorama"
            }
           ],
           "label": "3_hallway",
           "thumbnailUrl": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_t.jpg"
          },
          "yaw": -87.13,
          "backwardYaw": 92.85,
          "class": "AdjacentPanorama"
         },
         {
          "distance": 1,
          "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
          "yaw": -86.31,
          "backwardYaw": 93.62,
          "class": "AdjacentPanorama"
         },
         {
          "distance": 1,
          "panorama": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
          "yaw": 89.44,
          "backwardYaw": -88.66,
          "class": "AdjacentPanorama"
         },
         {
          "distance": 1,
          "panorama": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
          "yaw": -162.94,
          "backwardYaw": 16.97,
          "class": "AdjacentPanorama"
         },
         {
          "distance": 1,
          "panorama": {
           "vfov": 180,
           "partial": false,
           "id": "panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
           "mapLocations": [
            {
             "x": 488.05,
             "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
             "angle": 87.65,
             "y": 520.1,
             "class": "PanoramaMapLocation"
            }
           ],
           "pitch": 0,
           "hfovMax": 110,
           "hfov": 360,
           "class": "Panorama",
           "hfovMin": 60,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C1A7A220_EB08_6778_41D5_23E643438C99); this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D8ABD223_C878_9FA2_41D1_FFE0CA552C11",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 26.2,
                 "yaw": -177.51,
                 "image": {
                  "levels": [
                   {
                    "height": 118,
                    "width": 151,
                    "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_0_HS_0_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -43.14
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "to door"
               },
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7, this.camera_C1553217_EB08_6758_41DF_774C408EC24A); this.mainPlayList.set('selectedIndex', 23)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_D3850678_C8E8_67AE_41D2_56C85B5F880B",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 18.77,
                 "yaw": -87.85,
                 "image": {
                  "levels": [
                   {
                    "height": 76,
                    "width": 107,
                    "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_0_HS_1_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 15.64
                }
               ],
               "enabledInCardboard": true,
               "data": {
                "label": "upstairs"
               },
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_t.jpg"
            }
           ],
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "vfov": 180,
              "partial": false,
              "id": "panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
              "mapLocations": [
               {
                "x": 468.41,
                "map": {
                 "overlays": [
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 23)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_BA007F8A_E356_370D_41AC_727D00FCCFCE",
                   "map": {
                    "offsetY": 0,
                    "x": 448.65,
                    "width": 40,
                    "y": 376.15,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "stairs_2"
                   },
                   "image": {
                    "x": 448.41,
                    "y": 375.88,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 24)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_FA2A65C1_E37E_4508_41E8_01749836CCFA",
                   "map": {
                    "offsetY": 0,
                    "x": 451,
                    "width": 40,
                    "y": 278,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_1_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "hallway_1"
                   },
                   "image": {
                    "x": 450.7,
                    "y": 277.61,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_1.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 30)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_FD863C71_E342_4B08_41D1_43C174D07412",
                   "map": {
                    "offsetY": 0,
                    "x": 377.45,
                    "width": 40,
                    "y": 278.95,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_2_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "hallway_2"
                   },
                   "image": {
                    "x": 377.15,
                    "y": 278.67,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_2.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 32)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C2EE2D3E_E346_C578_41E2_40C167B107AB",
                   "map": {
                    "offsetY": 0,
                    "x": 318.25,
                    "width": 40,
                    "y": 279.3,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_3_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "hallway_3"
                   },
                   "image": {
                    "x": 317.99,
                    "y": 278.88,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_3.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 34)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_FC13A0E7_E346_DB08_41E2_D55D21071707",
                   "map": {
                    "offsetY": 0,
                    "x": 278.5,
                    "width": 40,
                    "y": 279.3,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_4_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "hallway_4"
                   },
                   "image": {
                    "x": 278.24,
                    "y": 278.88,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_4.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 36)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C3CFEFCB_E342_4518_41E2_373ADBB2E17F",
                   "map": {
                    "offsetY": 0,
                    "x": 231.45,
                    "width": 40,
                    "y": 279.3,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_5_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "hallway_5"
                   },
                   "image": {
                    "x": 231.16,
                    "y": 278.88,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_5.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 25)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C23D1ABC_E342_4F78_41E4_AC7FA2821B11",
                   "map": {
                    "offsetY": 0,
                    "x": 643.5,
                    "width": 40,
                    "y": 278.5,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_6_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "bedroom_1"
                   },
                   "image": {
                    "x": 643.18,
                    "y": 278.24,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_6.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 27)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C3C4FA75_E342_4F08_41E2_B417E805B031",
                   "map": {
                    "offsetY": 0,
                    "x": 622.8,
                    "width": 40,
                    "y": 381.3,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_7_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "bedroom_2"
                   },
                   "image": {
                    "x": 622.48,
                    "y": 381.06,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_7.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 29)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C2FB9A29_E346_4F19_41B4_3305457D99D2",
                   "map": {
                    "offsetY": 0,
                    "x": 542.15,
                    "width": 40,
                    "y": 425.2,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_8_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "bedroom_3"
                   },
                   "image": {
                    "x": 541.98,
                    "y": 424.91,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_8.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 28)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C2D60A44_E342_4F08_41C4_D0D155E421EF",
                   "map": {
                    "offsetY": 0,
                    "x": 705.75,
                    "width": 40,
                    "y": 478.55,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_9_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "bedroom_4"
                   },
                   "image": {
                    "x": 705.45,
                    "y": 478.31,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_9.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 26)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C0114813_E342_CB08_41D6_5946813067EA",
                   "map": {
                    "offsetY": 0,
                    "x": 644,
                    "width": 40,
                    "y": 171.5,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_10_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "bedroom_bathroom"
                   },
                   "image": {
                    "x": 643.69,
                    "y": 171.19,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_10.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 31)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C7D3BE4D_E35E_4718_41E6_A21090A06799",
                   "map": {
                    "offsetY": 0,
                    "x": 402.25,
                    "width": 40,
                    "y": 188.5,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_11_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "babyroom"
                   },
                   "image": {
                    "x": 401.92,
                    "y": 188.28,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_11.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 37)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C60E5262_E35E_3F08_41DC_6C995183CB29",
                   "map": {
                    "offsetY": 0,
                    "x": 153.6,
                    "width": 40,
                    "y": 384.6,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_12_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "kidroom"
                   },
                   "image": {
                    "x": 153.33,
                    "y": 384.41,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_12.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 38)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_C76DA7D6_E343_C508_41C2_7265264BC291",
                   "map": {
                    "offsetY": 0,
                    "x": 152.65,
                    "width": 40,
                    "y": 221.65,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_13_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "workroom"
                   },
                   "image": {
                    "x": 152.4,
                    "y": 221.36,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_13.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 33)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_A3A9FAFB_E3C2_CCF8_41E0_B5F0A0351212",
                   "map": {
                    "offsetY": 0,
                    "x": 297.8,
                    "width": 40,
                    "y": 202.4,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_14_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "Image"
                   },
                   "image": {
                    "x": 297.5,
                    "y": 202.11,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_14.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  },
                  {
                   "areas": [
                    {
                     "mapColor": "#FF0000",
                     "click": "this.mainPlayList.set('selectedIndex', 35)",
                     "class": "HotspotMapOverlayArea"
                    }
                   ],
                   "id": "overlay_A21926B1_E3CF_C708_41C5_681E1D2668B0",
                   "map": {
                    "offsetY": 0,
                    "x": 281.25,
                    "width": 40,
                    "y": 382.55,
                    "height": 40,
                    "offsetX": 0,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 19,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_15_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotMapOverlayMap"
                   },
                   "useHandCursor": true,
                   "data": {
                    "label": "Image"
                   },
                   "image": {
                    "x": 280.96,
                    "y": 382.33,
                    "class": "HotspotMapOverlayImage",
                    "width": 40,
                    "height": 40,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 39,
                       "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_15.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   },
                   "rollOverDisplay": false,
                   "class": "AreaHotspotMapOverlay"
                  }
                 ],
                 "thumbnailUrl": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_t.png",
                 "fieldOfViewOverlayInsideOpacity": 0.6,
                 "width": 880,
                 "fieldOfViewOverlayInsideColor": "#FFFFFF",
                 "height": 660,
                 "fieldOfViewOverlayOutsideColor": "#000000",
                 "minimumZoomFactor": 1,
                 "image": {
                  "levels": [
                   {
                    "height": 660,
                    "width": 880,
                    "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60.png",
                    "class": "ImageResourceLevel"
                   },
                   {
                    "height": 330,
                    "grayscale": true,
                    "width": 440,
                    "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_lq.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "id": "map_B9D26001_E356_08FF_41C9_258C203CFE60",
                 "label": "Upstairs",
                 "maximumZoomFactor": 1,
                 "scaleMode": "fit_to_width",
                 "class": "Map",
                 "fieldOfViewOverlayOutsideOpacity": 0,
                 "initialZoomFactor": 1,
                 "fieldOfViewOverlayRadiusScale": 0.08
                },
                "angle": 92.85,
                "y": 395.88,
                "class": "PanoramaMapLocation"
               }
              ],
              "pitch": 0,
              "hfovMax": 110,
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 60,
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C692B4D3_EB08_6CD8_41E6_2FCBE46814F5); this.mainPlayList.set('selectedIndex', 24)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_C13AAE61_CC53_C6A7_41D7_063911C08472",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 21.58,
                    "yaw": -91.06,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 19,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.48
                   }
                  ],
                  "items": [
                   {
                    "yaw": -91.06,
                    "hfov": 21.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 205,
                       "width": 245,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Upstairs"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A, this.camera_C6E794DD_EB08_6CC8_41C6_9A547B29A99D); this.mainPlayList.set('selectedIndex', 22)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_C35655CC_CC50_45FD_41E6_2F74EBC323CF",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 12.38,
                    "yaw": 92.38,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 17,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -45.96
                   }
                  ],
                  "items": [
                   {
                    "yaw": 92.38,
                    "hfov": 12.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 184,
                       "width": 202,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -45.96
                   }
                  ],
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Downstairs"
                  },
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_t.jpg"
               }
              ],
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": {
                 "vfov": 180,
                 "partial": false,
                 "id": "panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                 "mapLocations": [
                  {
                   "x": 470.7,
                   "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                   "angle": 90.02,
                   "y": 297.61,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "pitch": 0,
                 "hfovMax": 110,
                 "hfov": 360,
                 "class": "Panorama",
                 "hfovMin": 60,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7, this.camera_C64BB4A5_EB08_6379_41D7_639648D21483); this.mainPlayList.set('selectedIndex', 23)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_C2EFADCA_CC50_C5E5_41E4_D0C5E91FC273",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.83,
                       "yaw": 89.48,
                       "image": {
                        "levels": [
                         {
                          "height": 17,
                          "width": 16,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -43.08
                      }
                     ],
                     "items": [
                      {
                       "yaw": 89.48,
                       "hfov": 13.83,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 241,
                          "width": 215,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -43.08
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Stairs"
                     },
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_C0436561_CCB6_ED18_41C0_8316A0A3B08E",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 19.55,
                       "yaw": 1.14,
                       "image": {
                        "levels": [
                         {
                          "height": 114,
                          "width": 114,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.26
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "yaw": 1.14,
                       "hfov": 19.55,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 229,
                          "width": 229,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.26
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C6761491_EB08_6358_41A4_9D4D76058D0F); this.mainPlayList.set('selectedIndex', 25)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_C1CD0F5C_CCB5_7D28_41E8_BF4ADBCDC7A4",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 23.54,
                       "yaw": 1.89,
                       "image": {
                        "levels": [
                         {
                          "height": 17,
                          "width": 16,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_2_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -11.84
                      }
                     ],
                     "items": [
                      {
                       "yaw": 1.89,
                       "hfov": 23.54,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 299,
                          "width": 273,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -11.84
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Bedroom"
                     },
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C04A24A6_D116_A19D_41DC_0F73B597F136); this.mainPlayList.set('selectedIndex', 30)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_DCAD0BB5_D112_A7F9_41C0_A73D0BFCBAD6",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 20.68,
                       "yaw": 178.95,
                       "image": {
                        "levels": [
                         {
                          "height": 107,
                          "width": 118,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_3_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -38.89
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "babyroom"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C6AF24B6_EB08_6358_41EC_1B51F93CE38C); this.mainPlayList.set('selectedIndex', 30)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D7D1A9A4_DB79_88BD_41D2_92061C499506",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 24.35,
                       "yaw": 180,
                       "image": {
                        "levels": [
                         {
                          "height": 97,
                          "width": 140,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_4_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -40.38
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C678049B_EB08_6348_41EA_E6806D4DBA28); this.mainPlayList.set('selectedIndex', 32)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D516EE04_DB79_8B7C_41EA_287135932B5E",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.16,
                       "yaw": 178.78,
                       "image": {
                        "levels": [
                         {
                          "height": 37,
                          "width": 80,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_5_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -25.59
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C65DB4AD_EB08_6348_41E3_0DDA0DD33C24); this.mainPlayList.set('selectedIndex', 34)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D450088B_DB7B_888B_419A_30ACB71D8D0D",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.33,
                       "yaw": 178.84,
                       "image": {
                        "levels": [
                         {
                          "height": 29,
                          "width": 64,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_6_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -19.86
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C6649487_EB08_6338_41E7_21EA696D9396); this.mainPlayList.set('selectedIndex', 36)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_D49BD8EA_DB89_88B4_41C3_7F075ACAF17D",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8.81,
                       "yaw": 179.66,
                       "image": {
                        "levels": [
                         {
                          "height": 30,
                          "width": 50,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_7_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.85
                      }
                     ],
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay"
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_t.jpg"
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": {
                    "vfov": 180,
                    "partial": false,
                    "id": "panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                    "mapLocations": [
                     {
                      "x": 251.16,
                      "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                      "angle": 89.41,
                      "y": 298.88,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 110,
                    "hfov": 360,
                    "class": "Panorama",
                    "hfovMin": 60,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C7262393_EB08_6558_41D4_27D6A27709C3); this.mainPlayList.set('selectedIndex', 34)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CCB9F948_DB88_89F4_41B2_72DAF795297C",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 31.53,
                          "yaw": 1.48,
                          "image": {
                           "levels": [
                            {
                             "height": 123,
                             "width": 184,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_0_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -51.92
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C0C22371_EB08_65D8_41D6_B74EEEA1B63B); this.mainPlayList.set('selectedIndex', 32)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CD07A8D2_DB89_8894_41E6_C73ED97648E0",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 20.82,
                          "yaw": 0.31,
                          "image": {
                           "levels": [
                            {
                             "height": 73,
                             "width": 119,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -34.18
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C72813A7_EB08_6578_41D1_78FA18DF448A); this.mainPlayList.set('selectedIndex', 30)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C2A4348B_DB8F_788B_41E8_FD71412828F1",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.96,
                          "yaw": -0.22,
                          "image": {
                           "levels": [
                            {
                             "height": 42,
                             "width": 79,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_2_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.58
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C0EE534A_EB08_65CB_41E3_71B534D79D0A); this.mainPlayList.set('selectedIndex', 24)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_CCF78F6D_DB88_898C_41E1_AB09C4ECBF12",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.9,
                          "yaw": -0.19,
                          "image": {
                           "levels": [
                            {
                             "height": 28,
                             "width": 56,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_3_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -15.14
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77, this.camera_C0F0735D_EB08_65C8_41E8_57374DAAE1DD); this.mainPlayList.set('selectedIndex', 37)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C364D473_DB89_FF94_41D2_AD17F062DD4D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.13,
                          "yaw": 118.5,
                          "image": {
                           "levels": [
                            {
                             "height": 63,
                             "width": 52,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_4_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -25.66
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C3DB8C2A_DB8B_8FB4_41D7_1421CC21FC00",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 21.15,
                          "yaw": -126.05,
                          "image": {
                           "levels": [
                            {
                             "height": 116,
                             "width": 130,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_5_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.67
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -126.05,
                          "hfov": 21.15,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 232,
                             "width": 260,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_5_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.67
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2, this.camera_C0D4537F_EB08_65C8_41E0_5B2B9603D7DB); this.mainPlayList.set('selectedIndex', 38)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C3DF99A3_DB88_88B4_41E1_2B89C3B6A814",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 28.5,
                          "yaw": -125.41,
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 18,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_6_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -19.32
                         }
                        ],
                        "items": [
                         {
                          "yaw": -125.41,
                          "hfov": 28.5,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 297,
                             "width": 343,
                             "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -19.32
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Work Room"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_t.jpg"
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                      "yaw": -0.19,
                      "backwardYaw": 179.66,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
                       "mapLocations": [
                        {
                         "x": 173.33,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                         "angle": 90,
                         "y": 404.41,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C103C1DF_EB08_64C8_41E6_C7223D3C6258); this.mainPlayList.set('selectedIndex', 36)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_C27D8D0F_DB98_898C_41A0_5DB36FAEACD6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.84,
                             "yaw": -54.04,
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "width": 50,
                                "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_0_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -25.14
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C13131D5_EB08_64D8_41A8_28BC0E2DA345); this.mainPlayList.set('selectedIndex', 34)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_C1031343_DB9B_99F4_41EA_FD03E9FFDAAB",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.13,
                             "yaw": -44.81,
                             "image": {
                              "levels": [
                               {
                                "height": 52,
                                "width": 40,
                                "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_1_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -19.97
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.setComponentVisibility(this.Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E, true, 0, null, null, false); this.setComponentVisibility(this.Container_FD55E9E2_E649_6889_41DC_98E04686D8C4, true, 0, this.effect_C581E057_E656_B788_41BF_D9F9187D446D, 'showEffect', false)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_FE48F6BE_DBB8_988C_41E7_6E5F718EA85F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 13.46,
                             "yaw": -164.7,
                             "image": {
                              "levels": [
                               {
                                "height": 175,
                                "width": 76,
                                "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_2_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 11.66
                            }
                           ],
                           "items": [
                            {
                             "yaw": -164.7,
                             "hfov": 13.46,
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "image": {
                              "levels": [
                               {
                                "height": 350,
                                "width": 153,
                                "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 11.66
                            }
                           ],
                           "data": {
                            "label": "guitar"
                           },
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "vfov": 180,
                          "partial": false,
                          "id": "panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                          "mapLocations": [
                           {
                            "x": 298.24,
                            "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                            "angle": 89.43,
                            "y": 298.88,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 110,
                          "hfov": 360,
                          "class": "Panorama",
                          "hfovMin": 60,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C2E4F18E_EB08_6548_41C2_35F5D1BE1263); this.mainPlayList.set('selectedIndex', 32)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_C8446ED1_DBBB_8894_41D5_BB5FDEA55187",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 38.15,
                                "yaw": -1.27,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 137,
                                   "width": 200,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_0_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -57.07
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C28B317C_EB08_65C8_41C4_4A4D05726982); this.mainPlayList.set('selectedIndex', 36)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CCE18655_DBB9_9B9C_41E5_C4DD7A7B95FF",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 32.76,
                                "yaw": -179.57,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 145,
                                   "width": 191,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_1_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -49.47
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C2EA8197_EB08_6558_41E1_73B83642FB4B); this.mainPlayList.set('selectedIndex', 30)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CFFE7F96_DBB8_889C_41D2_051F45AE1076",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 20.82,
                                "yaw": -1.29,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 119,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_2_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -32.57
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C2BAD169_EB08_65C8_41D1_E2B95EDE6A90); this.mainPlayList.set('selectedIndex', 24)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CD9531BB_DB88_9894_4180_9C693D9E3AE9",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 12.54,
                                "yaw": -0.71,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 39,
                                   "width": 71,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_3_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -19.34
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77, this.camera_C29ED185_EB08_6538_41E6_E6091A0A6B96); this.mainPlayList.set('selectedIndex', 37)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_C211FE1C_DB99_8B8C_41D3_FF51E8896138",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.91,
                                "yaw": 141.79,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 39,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_4_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -19.62
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_D2E6F52E_E34E_4518_41D9_B10FB49F4470",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 18.54,
                                "yaw": 87.06,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 111,
                                   "width": 111,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_5_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -18.72
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "yaw": 87.06,
                                "hfov": 18.54,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 222,
                                   "width": 222,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -18.72
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB, this.camera_C2851173_EB08_65D8_41DD_FE43C6831D11); this.mainPlayList.set('selectedIndex', 35)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_CFA25AA7_E341_CF08_41EA_D7BAC5EB54F7",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 24.16,
                                "yaw": 88.04,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_6_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.88
                               }
                              ],
                              "items": [
                               {
                                "yaw": 88.04,
                                "hfov": 24.16,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "height": 285,
                                   "width": 285,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -15.88
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Bathroom"
                              },
                              "rollOverDisplay": true,
                              "class": "HotspotPanoramaOverlay"
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_t.jpg"
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                            "yaw": -0.71,
                            "backwardYaw": 178.84,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "vfov": 180,
                             "partial": false,
                             "id": "panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
                             "mapLocations": [
                              {
                               "x": 300.96,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                               "angle": 90,
                               "y": 402.33,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 110,
                             "hfov": 360,
                             "class": "Panorama",
                             "hfovMin": 60,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_CEA443C8_E342_7D18_4170_E0B52A2178E2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.11,
                                   "yaw": -92,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 52,
                                      "width": 52,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_0_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.16
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -92,
                                   "hfov": 9.11,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 104,
                                      "width": 104,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.16
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C7AAC413_EB08_6358_41C7_CF6214ECB869); this.mainPlayList.set('selectedIndex', 34)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_CE5E8EBC_E343_C778_41E0_E893F8BC64DB",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 12.52,
                                   "yaw": -91.86,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.17
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -91.86,
                                   "hfov": 12.52,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 149,
                                      "width": 143,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.17
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Hallway"
                                 },
                                 "rollOverDisplay": true,
                                 "class": "HotspotPanoramaOverlay"
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_t.jpg"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                               "yaw": -91.86,
                               "backwardYaw": 88.04,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "label": "24_hallway_bathroom",
                             "thumbnailUrl": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_t.jpg"
                            },
                            "yaw": 88.04,
                            "backwardYaw": -91.86,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                            "yaw": -179.57,
                            "backwardYaw": 1.48,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
                            "yaw": 141.79,
                            "backwardYaw": -44.81,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "vfov": 180,
                             "partial": false,
                             "id": "panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                             "mapLocations": [
                              {
                               "x": 337.99,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                               "angle": 89.52,
                               "y": 298.88,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 110,
                             "hfov": 360,
                             "class": "Panorama",
                             "hfovMin": 60,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C7DA545A_EB08_63C8_41DF_C24425F7F505); this.mainPlayList.set('selectedIndex', 30)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_CA1B1114_DB8F_799C_41B0_EE5F7FBFB207",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 31.34,
                                   "yaw": -1.59,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 134,
                                      "width": 182,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_0_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -48.95
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C7F49440_EB08_6338_41E8_10151C8A0BBB); this.mainPlayList.set('selectedIndex', 24)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C969A26A_DB88_BBB4_41E8_05C4F7C0ECB2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 15.69,
                                   "yaw": -0.57,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 58,
                                      "width": 89,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_1_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -24.65
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C7C84451_EB08_63D8_41E5_D970243A35AD); this.mainPlayList.set('selectedIndex', 34)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C91334AE_DB8B_788C_41D2_47769069B806",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 36.88,
                                   "yaw": 176.79,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 164,
                                      "width": 200,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_2_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -57.01
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C7C68449_EB08_63C8_41E7_764B51DED3D2); this.mainPlayList.set('selectedIndex', 36)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C82D2A4A_DBB9_8BF4_41E6_EEBB8035DA29",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 19.66,
                                   "yaw": 179.62,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 75,
                                      "width": 112,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_3_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -33.63
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C9E6D9BA_E346_4D78_41EB_8235BB908C26",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 16.55,
                                   "yaw": -92.62,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 99,
                                      "width": 99,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_4_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -18.98
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "yaw": -92.62,
                                   "hfov": 16.55,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 199,
                                      "width": 199,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_4_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -18.98
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38, this.camera_C7E2D437_EB08_6358_41A3_206969C90556); this.mainPlayList.set('selectedIndex', 33)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_C8BEC61C_E341_C738_41D5_7C05590D8818",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 30.95,
                                   "yaw": -91.44,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 23,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_5_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -16.51
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -91.44,
                                   "hfov": 30.95,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 247,
                                      "width": 367,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_5_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -16.51
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Laundry Room"
                                 },
                                 "rollOverDisplay": true,
                                 "class": "HotspotPanoramaOverlay"
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_t.jpg"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": {
                                "vfov": 180,
                                "partial": false,
                                "id": "panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
                                "mapLocations": [
                                 {
                                  "x": 317.5,
                                  "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                                  "angle": 90.99,
                                  "y": 222.11,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "pitch": 0,
                                "hfovMax": 110,
                                "hfov": 360,
                                "class": "Panorama",
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CED2B99A_E343_CD38_41D6_5B61954FBECD",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 12.38,
                                      "yaw": 66.18,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 71,
                                         "width": 71,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.81
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": 66.18,
                                      "hfov": 12.38,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 143,
                                         "width": 143,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.81
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C790F42D_EB08_6348_41ED_1AE6C0580029); this.mainPlayList.set('selectedIndex', 32)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CF338DB0_E342_4508_41E4_51FBCD4B4A51",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 15.32,
                                      "yaw": 67.01,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 17,
                                         "width": 16,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.66
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 67.01,
                                      "hfov": 15.32,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 188,
                                         "width": 176,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.66
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Hallway"
                                    },
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay"
                                   }
                                  ],
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "width": 4096,
                                     "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 2001,
                                     "width": 4002,
                                     "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_t.jpg"
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                                  "yaw": 67.01,
                                  "backwardYaw": -91.44,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "label": "22_laundryroom",
                                "thumbnailUrl": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_t.jpg"
                               },
                               "yaw": -91.44,
                               "backwardYaw": 67.01,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                               "yaw": -0.57,
                               "backwardYaw": 178.78,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                               "yaw": 179.62,
                               "backwardYaw": 0.31,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                               "yaw": 176.79,
                               "backwardYaw": -1.27,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": {
                                "vfov": 180,
                                "partial": false,
                                "id": "panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                                "mapLocations": [
                                 {
                                  "x": 397.15,
                                  "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                                  "angle": 87.8,
                                  "y": 298.67,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "pitch": 0,
                                "hfovMax": 110,
                                "hfov": 360,
                                "class": "Panorama",
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C73BC3B5_EB08_6558_41C5_DACDDAB653AA); this.mainPlayList.set('selectedIndex', 24)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_DF708504_D11E_A09D_41C5_3E8C030C2212",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 23.8,
                                      "yaw": 0.04,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 111,
                                         "width": 137,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_0_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -38.72
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "bedroom"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_C15E1763_D112_A09A_41E8_93C76A568AB9",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 20.11,
                                      "yaw": -88.25,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 121,
                                         "width": 121,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_1_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -19.93
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "baby room"
                                    },
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "yaw": -88.25,
                                      "hfov": 20.11,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 243,
                                         "width": 243,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_1_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -19.93
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790, this.camera_C761A3E5_EB08_64F8_41C9_3C7FC0B01285); this.mainPlayList.set('selectedIndex', 31)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_C1A38577_D113_A37B_41C4_2C3FD10C89AA",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 25.78,
                                      "yaw": -87.9,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_2_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.56
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -87.9,
                                      "hfov": 25.78,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 288,
                                         "width": 305,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.56
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Baby Room"
                                    },
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C70DF3CA_EB08_64C8_41B5_D4C0D6F2EFB9); this.mainPlayList.set('selectedIndex', 32)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CBCB5916_DB8B_899C_41A9_086BD3C17B0A",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 27.47,
                                      "yaw": 177.28,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 118,
                                         "width": 159,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_3_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -49.74
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C773B3EE_EB08_64C8_41E3_B30585D1C2CC); this.mainPlayList.set('selectedIndex', 34)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CA01F5CA_DB88_B8F4_41E3_718A6F0775D3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 19.94,
                                      "yaw": 179,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 64,
                                         "width": 114,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_4_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -33.04
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C71FF3DB_EB08_64C8_41D8_91406D61D2E5); this.mainPlayList.set('selectedIndex', 36)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "id": "overlay_CA1B082D_DB99_B78C_41D8_994BC7CD824F",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.24,
                                      "yaw": 179.22,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 50,
                                         "width": 75,
                                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_5_1_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -22.02
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay"
                                   }
                                  ],
                                  "sphere": {
                                   "levels": [
                                    {
                                     "height": 2048,
                                     "width": 4096,
                                     "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_hq.jpeg",
                                     "class": "ImageResourceLevel"
                                    },
                                    {
                                     "height": 2001,
                                     "width": 4002,
                                     "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961.jpeg",
                                     "class": "ImageResourceLevel"
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_t.jpg"
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                                  "yaw": 0.04,
                                  "backwardYaw": 180,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                                  "yaw": 177.28,
                                  "backwardYaw": -1.59,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                                  "yaw": 179.22,
                                  "backwardYaw": -0.22,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": {
                                   "vfov": 180,
                                   "partial": false,
                                   "id": "panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
                                   "mapLocations": [
                                    {
                                     "x": 421.92,
                                     "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                                     "angle": 88.7,
                                     "y": 208.28,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "pitch": 0,
                                   "hfovMax": 110,
                                   "hfov": 360,
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_C1CD807F_D116_A16B_41E8_63E5DECB41C3",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.47,
                                         "yaw": 114.07,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 66,
                                            "width": 66,
                                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_0_0_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -8.98
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "hallway"
                                       },
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "yaw": 114.07,
                                         "hfov": 11.47,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 132,
                                            "width": 132,
                                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -8.98
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C11471E9_EB08_64C9_41DA_1E80A77290A0); this.mainPlayList.set('selectedIndex', 30)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "id": "overlay_C07CBC2B_D116_A0EB_41D4_4B6C0155BDA4",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 13.44,
                                         "yaw": 114.58,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 18,
                                            "width": 16,
                                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_1_0_map.gif",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -7
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 114.58,
                                         "hfov": 13.44,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 173,
                                            "width": 153,
                                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_1_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -7
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "data": {
                                        "label": "Hallway"
                                       },
                                       "rollOverDisplay": true,
                                       "class": "HotspotPanoramaOverlay"
                                      }
                                     ],
                                     "sphere": {
                                      "levels": [
                                       {
                                        "height": 2048,
                                        "width": 4096,
                                        "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_hq.jpeg",
                                        "class": "ImageResourceLevel"
                                       },
                                       {
                                        "height": 2001,
                                        "width": 4002,
                                        "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790.jpeg",
                                        "class": "ImageResourceLevel"
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_t.jpg"
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "distance": 1,
                                     "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                                     "yaw": 114.58,
                                     "backwardYaw": -87.9,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "label": "20_babyroom",
                                   "thumbnailUrl": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_t.jpg"
                                  },
                                  "yaw": -87.9,
                                  "backwardYaw": 114.58,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "distance": 1,
                                  "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                                  "yaw": 179,
                                  "backwardYaw": -1.29,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "label": "19_hallway",
                                "thumbnailUrl": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_t.jpg"
                               },
                               "yaw": -1.59,
                               "backwardYaw": 177.28,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "label": "21_hallway",
                             "thumbnailUrl": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_t.jpg"
                            },
                            "yaw": -1.27,
                            "backwardYaw": 176.79,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                            "yaw": -1.29,
                            "backwardYaw": 179,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "label": "23_hallway",
                          "thumbnailUrl": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_t.jpg"
                         },
                         "yaw": -44.81,
                         "backwardYaw": 141.79,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                         "yaw": -54.04,
                         "backwardYaw": 118.5,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "26_kidroom",
                       "thumbnailUrl": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_t.jpg"
                      },
                      "yaw": 118.5,
                      "backwardYaw": -54.04,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                      "yaw": 0.31,
                      "backwardYaw": 179.62,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
                       "mapLocations": [
                        {
                         "x": 172.4,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                         "angle": 90,
                         "y": 241.36,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_C1986A17_DB99_8B9C_41E4_7A71D98158F9",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 9.94,
                             "yaw": 25.59,
                             "image": {
                              "levels": [
                               {
                                "height": 57,
                                "width": 57,
                                "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.12
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 25.59,
                             "hfov": 9.94,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 114,
                                "width": 114,
                                "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.12
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C09CB33A_EB08_6548_41E4_6E06ADE97BE5); this.mainPlayList.set('selectedIndex', 36)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_C16B24FA_DB99_B894_41E5_1D87170A35B4",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 12.62,
                             "yaw": 25.93,
                             "image": {
                              "levels": [
                               {
                                "height": 17,
                                "width": 16,
                                "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.19
                            }
                           ],
                           "items": [
                            {
                             "yaw": 25.93,
                             "hfov": 12.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 158,
                                "width": 144,
                                "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.19
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Hallway"
                           },
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                         "yaw": 25.93,
                         "backwardYaw": -125.41,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "27_workroom",
                       "thumbnailUrl": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_t.jpg"
                      },
                      "yaw": -125.41,
                      "backwardYaw": 25.93,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                      "yaw": 1.48,
                      "backwardYaw": -179.57,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                      "yaw": -0.22,
                      "backwardYaw": 179.22,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "label": "25_hallway",
                    "thumbnailUrl": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_t.jpg"
                   },
                   "yaw": 179.66,
                   "backwardYaw": -0.19,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "vfov": 180,
                    "partial": false,
                    "id": "panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                    "mapLocations": [
                     {
                      "x": 663.18,
                      "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                      "angle": 88.3,
                      "y": 298.24,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 110,
                    "hfov": 360,
                    "class": "Panorama",
                    "hfovMin": 60,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C2E437D0_CCBD_6D38_41DB_574D315CFCB2",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 20.93,
                          "yaw": -89.99,
                          "image": {
                           "levels": [
                            {
                             "height": 125,
                             "width": 125,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -17.74
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "data": {
                         "label": "bathroom"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -89.99,
                          "hfov": 20.93,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 250,
                             "width": 250,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -17.74
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9, this.camera_C032E281_EB08_6738_41BA_6C2564BC0EFB); this.mainPlayList.set('selectedIndex', 26)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C3F1C381_CCBF_6518_41DC_89A1709181B9",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 24.29,
                          "yaw": -89.63,
                          "image": {
                           "levels": [
                            {
                             "height": 17,
                             "width": 16,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -14.67
                         }
                        ],
                        "items": [
                         {
                          "yaw": -89.63,
                          "hfov": 24.29,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 320,
                             "width": 285,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -14.67
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Bathroom"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C004E289_EB08_6748_41EC_5F881F54FC17); this.mainPlayList.set('selectedIndex', 27)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C3A1F053_CCBD_E338_41E0_EC5948FC070D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 19.1,
                          "yaw": 98.92,
                          "image": {
                           "levels": [
                            {
                             "height": 87,
                             "width": 109,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_2_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -29.79
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_DDA1CA3A_CCBB_2768_41C8_15D5A5B7B581",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.98,
                          "yaw": 179.5,
                          "image": {
                           "levels": [
                            {
                             "height": 34,
                             "width": 34,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_3_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.2
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "data": {
                         "label": "hallway"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": 179.5,
                          "hfov": 5.98,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 68,
                             "width": 68,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_3_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -5.2
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C0216278_EB08_67C8_41DC_F509AE90D950); this.mainPlayList.set('selectedIndex', 24)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_C35A9EAC_CCBB_3F6F_41E3_D8D195B567A2",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.83,
                          "yaw": 179.67,
                          "image": {
                           "levels": [
                            {
                             "height": 19,
                             "width": 16,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_4_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.28
                         }
                        ],
                        "items": [
                         {
                          "yaw": 179.67,
                          "hfov": 6.83,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "height": 94,
                             "width": 77,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_4_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -4.28
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Hallway"
                        },
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C0168292_EB08_6758_41EA_C961F02870AF); this.mainPlayList.set('selectedIndex', 29)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_EB271D04_DB8B_9338_41CF_10CB1D0988BC",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.63,
                          "yaw": 124.19,
                          "image": {
                           "levels": [
                            {
                             "height": 49,
                             "width": 66,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_5_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -16.5
                         }
                        ],
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay"
                       },
                       {
                        "useHandCursor": true,
                        "autoplay": true,
                        "vfov": 9.99,
                        "video": {
                         "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
                         "height": 1080,
                         "width": 1920,
                         "class": "VideoResource"
                        },
                        "id": "overlay_CEF84CB3_DE1A_1ABD_41E3_FEE23B2068F8",
                        "rotationX": -1.69,
                        "roll": 1.25,
                        "image": {
                         "levels": [
                          {
                           "height": 1080,
                           "width": 1920,
                           "url": "media/overlay_CEF84CB3_DE1A_1ABD_41E3_FEE23B2068F8_t.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "rotationY": -35.44,
                        "loop": true,
                        "pitch": 1.58,
                        "enabledInCardboard": true,
                        "yaw": 142.82,
                        "hfov": 16.72,
                        "class": "VideoPanoramaOverlay"
                       }
                      ],
                      "sphere": {
                       "levels": [
                        {
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_t.jpg"
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                      "yaw": 179.67,
                      "backwardYaw": 1.89,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
                       "mapLocations": [
                        {
                         "x": 663.69,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                         "angle": 91.07,
                         "y": 191.19,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DDA7FD2F_CCB7_1D68_41CC_6165AF4A7FF1",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 13.09,
                             "yaw": 88.77,
                             "image": {
                              "levels": [
                               {
                                "height": 75,
                                "width": 75,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.52
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "data": {
                            "label": "exit bathroom"
                           },
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "yaw": 88.77,
                             "hfov": 13.09,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 151,
                                "width": 151,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.52
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C1DF7270_EB08_67D8_41E3_EC61823BB9B6); this.mainPlayList.set('selectedIndex', 25)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DC472A0C_CCB6_E72F_41D2_54853F6D4E00",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 22.12,
                             "yaw": 89.31,
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 21,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.94
                            }
                           ],
                           "items": [
                            {
                             "yaw": 89.31,
                             "hfov": 22.12,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "height": 192,
                                "width": 254,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.94
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Exit Bathroom"
                           },
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                         "yaw": 89.31,
                         "backwardYaw": -89.63,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "14_bedroom_bathroom",
                       "thumbnailUrl": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_t.jpg"
                      },
                      "yaw": -89.63,
                      "backwardYaw": 89.31,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": {
                       "vfov": 180,
                       "partial": false,
                       "id": "panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                       "mapLocations": [
                        {
                         "x": 642.48,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                         "angle": 89.36,
                         "y": 401.06,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 110,
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C6031476_EB08_63D8_41ED_093CA4627898); this.mainPlayList.set('selectedIndex', 25)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DC3222D0_CCCD_2737_41A4_BA7503594E1A",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 19.48,
                             "yaw": -80.92,
                             "image": {
                              "levels": [
                               {
                                "height": 89,
                                "width": 111,
                                "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_0_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -29.62
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE, this.camera_C631046D_EB08_63C8_41BC_D3F034D29547); this.mainPlayList.set('selectedIndex', 28)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DE8E1B61_CCCD_6519_41BA_35B534CB542B",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 16.18,
                             "yaw": 53.71,
                             "image": {
                              "levels": [
                               {
                                "height": 65,
                                "width": 92,
                                "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_1_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -25.54
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C612C47E_EB08_63C8_41E6_F24B9FBCD5A3); this.mainPlayList.set('selectedIndex', 29)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "id": "overlay_DEA11382_CCCF_E51B_41E8_ACEC04E334B6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 21.16,
                             "yaw": 151.46,
                             "image": {
                              "levels": [
                               {
                                "height": 94,
                                "width": 121,
                                "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_2_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -32.72
                            }
                           ],
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay"
                          }
                         ],
                         "sphere": {
                          "levels": [
                           {
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_t.jpg"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": {
                          "vfov": 180,
                          "partial": false,
                          "id": "panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
                          "mapLocations": [
                           {
                            "x": 725.45,
                            "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                            "angle": 86.28,
                            "y": 498.31,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 110,
                          "hfov": 360,
                          "class": "Panorama",
                          "hfovMin": 60,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C1F8225D_EB08_67C8_41D6_32BCE1BF16D3); this.mainPlayList.set('selectedIndex', 27)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_DFF81448_CCDB_E317_41CE_A0625A67A2F3",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 15.77,
                                "yaw": -126.51,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 90,
                                   "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_0_HS_0_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -24.17
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C1CAA267_EB08_67F8_41E3_08CAD1BAC16F); this.mainPlayList.set('selectedIndex', 29)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "id": "overlay_DFB6275D_CCDD_2D28_4187_50B1593081B7",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 12.45,
                                "yaw": -160.22,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 54,
                                   "width": 71,
                                   "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_0_HS_1_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -18.57
                               }
                              ],
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay"
                             },
                             {
                              "useHandCursor": true,
                              "autoplay": true,
                              "vfov": 8.33,
                              "video": {
                               "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
                               "height": 1080,
                               "width": 1920,
                               "class": "VideoResource"
                              },
                              "id": "overlay_CE9C7F91_DE06_377D_41D3_5EB9976CA43A",
                              "rotationX": -1.46,
                              "roll": -0.78,
                              "image": {
                               "levels": [
                                {
                                 "height": 1080,
                                 "width": 1920,
                                 "url": "media/overlay_CE9C7F91_DE06_377D_41D3_5EB9976CA43A_t.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "rotationY": 23.39,
                              "loop": true,
                              "pitch": 1.35,
                              "enabledInCardboard": true,
                              "yaw": -157.16,
                              "hfov": 14.44,
                              "class": "VideoPanoramaOverlay"
                             }
                            ],
                            "sphere": {
                             "levels": [
                              {
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_t.jpg"
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                            "yaw": -126.51,
                            "backwardYaw": 53.71,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "distance": 1,
                            "panorama": {
                             "vfov": 180,
                             "partial": false,
                             "id": "panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                             "mapLocations": [
                              {
                               "x": 561.98,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
                               "angle": 90.44,
                               "y": 444.91,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "pitch": 0,
                             "hfovMax": 110,
                             "hfov": 360,
                             "class": "Panorama",
                             "hfovMin": 60,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C6F8E4F0_EB08_6CD8_41D6_35FEAB03818B); this.mainPlayList.set('selectedIndex', 27)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_DF139474_CCDD_23FF_41DE_6FD334612D95",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 21.01,
                                   "yaw": -28.3,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 96,
                                      "width": 120,
                                      "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_0_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -31.97
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE, this.camera_C6E974E7_EB08_6CF8_41DE_4291FB157249); this.mainPlayList.set('selectedIndex', 28)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_D8CD8EAF_CCDB_3F69_41DE_7D1EB39088EF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 12.73,
                                   "yaw": 20.02,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 53,
                                      "width": 72,
                                      "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_1_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -19.04
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C6CAA4FA_EB08_6CC8_41E8_1754513D61FF); this.mainPlayList.set('selectedIndex', 25)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "id": "overlay_EA3A1A93_DB88_9159_41C4_D420F105FA80",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 11.64,
                                   "yaw": -56.03,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 45,
                                      "width": 66,
                                      "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_2_1_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.63
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay"
                                },
                                {
                                 "useHandCursor": true,
                                 "autoplay": true,
                                 "vfov": 30.03,
                                 "video": {
                                  "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
                                  "height": 1080,
                                  "width": 1920,
                                  "class": "VideoResource"
                                 },
                                 "id": "overlay_D1623519_DE06_0B6C_41BA_9A57A03B4936",
                                 "rotationX": -5.84,
                                 "roll": -2.93,
                                 "image": {
                                  "levels": [
                                   {
                                    "height": 1080,
                                    "width": 1920,
                                    "url": "media/overlay_D1623519_DE06_0B6C_41BA_9A57A03B4936_t.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "rotationY": 30.95,
                                 "loop": true,
                                 "pitch": 4.83,
                                 "enabledInCardboard": true,
                                 "yaw": -148.99,
                                 "hfov": 49.96,
                                 "class": "VideoPanoramaOverlay"
                                }
                               ],
                               "sphere": {
                                "levels": [
                                 {
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_t.jpg"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
                               "yaw": 20.02,
                               "backwardYaw": -160.22,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                               "yaw": -28.3,
                               "backwardYaw": 151.46,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "distance": 1,
                               "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                               "yaw": -56.03,
                               "backwardYaw": 124.19,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "label": "18_bedroom",
                             "thumbnailUrl": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_t.jpg"
                            },
                            "yaw": -160.22,
                            "backwardYaw": 20.02,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "label": "16_bedroom",
                          "thumbnailUrl": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_t.jpg"
                         },
                         "yaw": 53.71,
                         "backwardYaw": -126.51,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                         "yaw": -80.92,
                         "backwardYaw": 98.92,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                         "yaw": 151.46,
                         "backwardYaw": -28.3,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "label": "15_bedroom",
                       "thumbnailUrl": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_t.jpg"
                      },
                      "yaw": 98.92,
                      "backwardYaw": -80.92,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                      "yaw": 124.19,
                      "backwardYaw": -56.03,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "label": "14_bedroom",
                    "thumbnailUrl": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_t.jpg"
                   },
                   "yaw": 1.89,
                   "backwardYaw": 179.67,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                   "yaw": 178.78,
                   "backwardYaw": -0.57,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
                   "yaw": 89.48,
                   "backwardYaw": -91.06,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                   "yaw": 178.84,
                   "backwardYaw": -0.71,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                   "yaw": 180,
                   "backwardYaw": 0.04,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "label": "12_hallway",
                 "thumbnailUrl": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_t.jpg"
                },
                "yaw": -91.06,
                "backwardYaw": 89.48,
                "class": "AdjacentPanorama"
               },
               {
                "distance": 1,
                "panorama": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
                "yaw": 92.38,
                "backwardYaw": -87.85,
                "class": "AdjacentPanorama"
               }
              ],
              "label": "11_staircase",
              "thumbnailUrl": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_t.jpg"
             },
             "yaw": -87.85,
             "backwardYaw": 92.38,
             "class": "AdjacentPanorama"
            },
            {
             "distance": 1,
             "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
             "yaw": -177.51,
             "backwardYaw": 1.63,
             "class": "AdjacentPanorama"
            }
           ],
           "label": "10_staircase",
           "thumbnailUrl": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_t.jpg"
          },
          "yaw": 1.63,
          "backwardYaw": -177.51,
          "class": "AdjacentPanorama"
         }
        ],
        "label": "2_hallway",
        "thumbnailUrl": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_t.jpg"
       },
       "yaw": -88.66,
       "backwardYaw": 89.44,
       "class": "AdjacentPanorama"
      }
     ],
     "label": "1_door",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_t.jpg"
    },
    "yaw": -89.65,
    "backwardYaw": 90.36,
    "class": "AdjacentPanorama"
   },
   {
    "distance": 1,
    "panorama": {
     "partial": false,
     "id": "panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
     "pitch": 0,
     "hfovMax": 110,
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6, this.camera_C12C71CD_EB08_64C8_419F_53027E81107C); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_A9A912DF_BFA8_1F7E_41E6_EAA188735695",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.09,
           "yaw": -179.75,
           "image": {
            "levels": [
             {
              "height": 26,
              "width": 34,
              "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.99
          }
         ],
         "enabledInCardboard": true,
         "data": {
          "label": "Polygon"
         },
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_t.jpg"
      }
     ],
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
       "yaw": -179.75,
       "backwardYaw": -0.03,
       "class": "AdjacentPanorama"
      }
     ],
     "label": "exterior2",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_t.jpg"
    },
    "yaw": -0.03,
    "backwardYaw": -179.75,
    "class": "AdjacentPanorama"
   }
  ],
  "label": "exterior1",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_t.jpg"
 },
 {
  "id": "panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.8,
   "pitch": -5.23
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
 {
  "id": "panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior3",
  "partial": false,
  "id": "panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_t.jpg"
 },
 {
  "id": "panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior4",
  "partial": false,
  "id": "panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_t.jpg"
 },
 {
  "id": "panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior5",
  "partial": false,
  "id": "panorama_B318685E_BF99_EB41_41CC_707E9BA43473",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_t.jpg"
 },
 {
  "id": "panorama_B318685E_BF99_EB41_41CC_707E9BA43473_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior6",
  "partial": false,
  "id": "panorama_CF976575_C477_87C6_41CD_A3267E60C7DF",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_t.jpg"
 },
 {
  "id": "panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior7",
  "partial": false,
  "id": "panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_t.jpg"
 },
 {
  "id": "panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior8",
  "partial": false,
  "id": "panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_t.jpg"
 },
 {
  "id": "panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "label": "exterior9",
  "partial": false,
  "id": "panorama_C859FD08_C476_874E_41C1_1303C257A657",
  "pitch": 0,
  "hfovMax": 110,
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_t.jpg"
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_t.jpg"
 },
 {
  "id": "panorama_C859FD08_C476_874E_41C1_1303C257A657_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
 {
  "id": "panorama_C81ED583_C479_8742_41D0_080898C5BAEC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.53,
   "pitch": -0.49
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
 {
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer"
 },
 {
  "id": "panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.33,
   "pitch": -0.53
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
 {
  "id": "panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.04,
   "pitch": -4.28
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
 {
  "id": "panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.12,
   "pitch": -7.56
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
 {
  "id": "panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
 {
  "id": "panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
 {
  "id": "panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.54,
   "pitch": -1.28
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
 {
  "id": "panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.41,
   "pitch": -14.97
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
 {
  "id": "panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 98.85,
   "pitch": -11.25
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
 {
  "id": "panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -145.04,
   "pitch": -6.15
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
 {
  "id": "panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.95,
   "pitch": -4.6
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
 {
  "id": "panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90,
   "pitch": -5.19
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
 {
  "id": "panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 177.89,
   "pitch": -8.2
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
 {
  "id": "panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 87.89,
   "pitch": -2.77
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
 {
  "id": "panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.61,
   "pitch": -3
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
 {
  "id": "panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
 {
  "id": "panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.36,
   "pitch": -10.43
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
 {
  "id": "panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
 {
  "id": "panorama_C8B558F4_C479_8EC7_41D3_489432109961_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 174.78,
   "pitch": -3.26
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
 {
  "id": "panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.34,
   "pitch": -4.74
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
 {
  "id": "panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
 {
  "id": "panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.91,
   "pitch": -7.6
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
 {
  "id": "panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
 {
  "id": "panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.09,
   "pitch": -0.75
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
 {
  "id": "panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
 {
  "id": "panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 46.89,
   "pitch": -1.36
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
 {
  "id": "panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.49,
   "pitch": -3.59
  },
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "camera": "this.panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_camera",
    "media": "this.panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD', this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.get('visible')); this.registerKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE', this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15, 'showEffect', false); this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66, 'hideEffect', false); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')){ if(this.getKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')) { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_C6CA34FA_EB08_6CC8_41D1_4D03A2B639CA, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE'); if(this.existsKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')){ if(this.getKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')) { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_C6CBD4FA_EB08_6CC8_41BA_858CCFE31744, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_C6CB84FA_EB08_6CC8_41E9_604C746DB48D, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B4850F51_BF98_2543_41C9_38D43C10D640_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B4850F51_BF98_2543_41C9_38D43C10D640",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_camera",
    "media": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
    "begin": "this.registerKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD', this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.get('visible')); this.registerKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE', this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994, 'hideEffect', false); this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')){ if(this.getKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')) { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_C6C8C4FB_EB08_6CC8_41DB_E8CDCC0018C1, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE'); if(this.existsKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')){ if(this.getKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')) { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_C6C8D4FB_EB08_6CC8_41C6_3B6260AF059A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_B318685E_BF99_EB41_41CC_707E9BA43473_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_B318685E_BF99_EB41_41CC_707E9BA43473",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_CF976575_C477_87C6_41CD_A3267E60C7DF",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C859FD08_C476_874E_41C1_1303C257A657_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_C859FD08_C476_874E_41C1_1303C257A657",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC_camera",
    "media": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_DBF34FCE_E659_A898_41DB_13300EF76608, 'hideEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_C6C934FB_EB08_6CC8_41D5_D274C88B2213, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_DBF34FCE_E659_A898_41DB_13300EF76608, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25DE144_EB08_6538_41E8_549851A40AA8",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_C6D6A4FC_EB08_6CC8_41EA_18676E8314A0, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25DE144_EB08_6538_41E8_549851A40AA8, this.MapViewerMapPlayer)",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A, 'showEffect', false)",
    "camera": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_camera",
    "media": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25D8144_EB08_6538_41DB_40D1DD13B983",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25D8144_EB08_6538_41DB_40D1DD13B983, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_camera",
    "media": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25D5145_EB08_6538_41E9_73E8C9190E14",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25D5145_EB08_6538_41E9_73E8C9190E14, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_camera",
    "media": "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25AD145_EB08_6538_41D0_7F0F842B37D3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25AD145_EB08_6538_41D0_7F0F842B37D3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_camera",
    "media": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25A7145_EB08_6538_41B4_BCA2B1B541BF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25A7145_EB08_6538_41B4_BCA2B1B541BF, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_camera",
    "media": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25A1145_EB08_6538_41EC_7F77D6515C6F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25A1145_EB08_6538_41EC_7F77D6515C6F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_camera",
    "media": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25BA146_EB08_6538_41D5_5BC948E0F37A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25BA146_EB08_6538_41D5_5BC948E0F37A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_camera",
    "media": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C25B5146_EB08_6538_41E4_43F8B9A4D890",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C25B5146_EB08_6538_41E4_43F8B9A4D890, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_camera",
    "media": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C258E146_EB08_6538_41D3_8ED15CEA222A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C258E146_EB08_6538_41D3_8ED15CEA222A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_camera",
    "media": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2589146_EB08_6538_4198_BFF1C3FCEDD2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2589146_EB08_6538_4198_BFF1C3FCEDD2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_camera",
    "media": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2580147_EB08_6538_41E6_82A98FFB886A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2580147_EB08_6538_41E6_82A98FFB886A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_camera",
    "media": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C259A147_EB08_6538_418A_1AE5583BAA2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C259A147_EB08_6538_418A_1AE5583BAA2D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "camera": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_camera",
    "media": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2592147_EB08_6538_41E7_95F3B9BE5D38",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2592147_EB08_6538_41E7_95F3B9BE5D38, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "camera": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_camera",
    "media": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A6D147_EB08_6538_41EA_7F31CDB9D287",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A6D147_EB08_6538_41EA_7F31CDB9D287, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "camera": "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_camera",
    "media": "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A66148_EB08_65C8_41EB_42681B862D1D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A66148_EB08_65C8_41EB_42681B862D1D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "camera": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_camera",
    "media": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A60148_EB08_65C8_41C4_924BEBFBDC39",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A60148_EB08_65C8_41C4_924BEBFBDC39, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "camera": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_camera",
    "media": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A7B148_EB08_65C8_41EB_77C5313A1DE7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A7B148_EB08_65C8_41EB_77C5313A1DE7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "camera": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_camera",
    "media": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A72148_EB08_65C8_41D3_A5A1BFDFED23",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A72148_EB08_65C8_41D3_A5A1BFDFED23, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "camera": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961_camera",
    "media": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A4F149_EB08_65C8_41DB_13020F191ADC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A4F149_EB08_65C8_41DB_13020F191ADC, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "camera": "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_camera",
    "media": "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A61149_EB08_65C8_41DB_B0AD2DD366CB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A61149_EB08_65C8_41DB_B0AD2DD366CB, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "camera": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_camera",
    "media": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A7B149_EB08_65C8_41C3_51357A759F0C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A7B149_EB08_65C8_41C3_51357A759F0C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "camera": "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_camera",
    "media": "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A74149_EB08_65C8_41A3_59A64E481260",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A74149_EB08_65C8_41A3_59A64E481260, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "camera": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_camera",
    "media": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A4F149_EB08_65C8_41EB_80F6B60340FD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A4F149_EB08_65C8_41EB_80F6B60340FD, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "camera": "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_camera",
    "media": "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A46149_EB08_65C8_41ED_4460EAE149CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A46149_EB08_65C8_41ED_4460EAE149CE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "camera": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_camera",
    "media": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A5E149_EB08_65C8_41E5_036E42364499",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A5E149_EB08_65C8_41E5_036E42364499, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
    "camera": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_camera",
    "media": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_C2A58149_EB08_65C8_41E5_EB954E1DA3E3",
    "end": "this.trigger('tourEnded')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C2A58149_EB08_65C8_41E5_EB954E1DA3E3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)",
    "camera": "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_camera",
    "media": "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_C2538141_EB08_6538_41D3_BBDADDCD94AD",
  "class": "PlayList"
 },
 "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_C2539141_EB08_6538_41EC_A5C7965F2C6C",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_DB614D57_CCCD_1D39_41E4_4A60731B3698_t.jpg",
  "label": "Rotasia Promo Video (NEXT)",
  "video": {
   "mp4Url": "media/video_DB614D57_CCCD_1D39_41E4_4A60731B3698.mp4",
   "height": 1080,
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_DB614D57_CCCD_1D39_41E4_4A60731B3698",
  "loop": false,
  "class": "Video",
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_DB614D57_CCCD_1D39_41E4_4A60731B3698",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C250E141_EB08_6538_41DD_05D1F50AA912, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C250E141_EB08_6538_41DD_05D1F50AA912, 0, this.video_DB614D57_CCCD_1D39_41E4_4A60731B3698)"
   }
  ],
  "id": "playList_C250E141_EB08_6538_41DD_05D1F50AA912",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_D0725878_DE0A_39AB_41E1_34180C230195_t.jpg",
  "label": "Intro video for travel",
  "video": {
   "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4",
   "height": 1080,
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_D0725878_DE0A_39AB_41E1_34180C230195",
  "loop": false,
  "class": "Video",
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D0725878_DE0A_39AB_41E1_34180C230195",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C250D141_EB08_6538_41DA_2AB18BDC58CC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C250D141_EB08_6538_41DA_2AB18BDC58CC, 0, this.video_D0725878_DE0A_39AB_41E1_34180C230195)"
   }
  ],
  "id": "playList_C250D141_EB08_6538_41DA_2AB18BDC58CC",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_C250A141_EB08_6538_41E0_580A2E5EEB09",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_C2508142_EB08_6538_41E2_6E371FE1E9BF",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C_t.jpg",
  "label": "chimney fire",
  "video": {
   "mp4Url": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C.mp4",
   "height": 1080,
   "width": 1080,
   "class": "VideoResource"
  },
  "width": 1080,
  "id": "video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C",
  "loop": false,
  "class": "Video",
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C2509142_EB08_6538_41D0_96052A79C348, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C2509142_EB08_6538_41D0_96052A79C348, 0, this.video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C)"
   }
  ],
  "id": "playList_C2509142_EB08_6538_41D0_96052A79C348",
  "class": "PlayList"
 },
 {
  "easing": "linear",
  "id": "effect_F8A13593_E649_D888_4181_C6B58340B31E",
  "duration": 200,
  "class": "FadeOutEffect"
 },
 {
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "shadowHorizontalLength": 3,
  "titlePaddingTop": 5,
  "backgroundColor": [],
  "headerBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonIconColor": "#000000",
  "paddingRight": 0,
  "modal": true,
  "bodyPaddingRight": 10,
  "shadowSpread": 1,
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
  "closeButtonBackgroundColor": [],
  "borderRadius": 5,
  "gap": 10,
  "closeButtonIconWidth": 20,
  "shadowOpacity": 0.5,
  "horizontalAlign": "center",
  "class": "Window",
  "headerPaddingRight": 10,
  "backgroundColorDirection": "vertical",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
  "shadow": true,
  "bodyBackgroundColor": [
   "#CCCCCC"
  ],
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonPressedIconLineWidth": 1,
  "bodyPaddingLeft": 10,
  "creationPolicy": "delayed",
  "footerBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBorderSize": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingTop": 10,
  "backgroundOpacity": 1,
  "veilColorDirection": "horizontal",
  "title": "Microwave",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "shadowColor": "#000000",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonBorderRadius": 20,
  "paddingBottom": 0,
  "headerBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingLeft": 10,
  "titleFontFamily": "Arial",
  "closeButtonPressedBorderColor": "#000000",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 10,
    "scrollBarColor": "#000000",
    "paddingLeft": 10,
    "height": "100%",
    "paddingTop": 10,
    "minWidth": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "class": "HTMLText",
    "minHeight": 0,
    "shadow": false,
    "width": "50%",
    "scrollBarMargin": 2,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Alef';\">Microwaves are a form of electromagnetic radiation with wavelengths ranging from about 1 millimeter to 1 meter, falling between radio waves and infrared radiation on the electromagnetic spectrum. They are commonly used in various applications, including communication technologies, weather forecasting, and cooking. In microwave ovens, microwaves specifically target water, fat, and sugar molecules in food, causing them to vibrate and generate heat through a process known as dielectric heating. This allows food to be cooked quickly and efficiently, as the heat is produced directly within the food rather than from an external source.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Alef';\">The invention of the microwave oven is credited to American engineer Percy Spencer, who developed the first commercial model in 1947, utilizing technology from radar systems developed during World War II. Microwave ovens have since become a staple in kitchens worldwide, known for their convenience in reheating and cooking a variety of foods. While they are effective for many cooking tasks, microwave ovens do not brown or crisp food in the same way that conventional ovens do, as they typically do not reach the high temperatures necessary for such reactions.</SPAN></SPAN></DIV></div>",
    "backgroundOpacity": 0,
    "id": "htmlText_uidC244B12E_EB08_6548_41EA_3E537D18C242",
    "data": {
     "name": "HTMLText10304"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5
   },
   {
    "borderSize": 0,
    "backgroundColor": [],
    "scrollEnabled": false,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "100%",
    "paddingTop": 0,
    "minWidth": 0,
    "borderRadius": 0,
    "url": "https://sketchfab.com/models/2f1ed69cdc0c482b9627aadd21494117/embed",
    "backgroundColorRatios": [],
    "class": "WebFrame",
    "backgroundColorDirection": "vertical",
    "insetBorder": false,
    "shadow": false,
    "minHeight": 0,
    "backgroundOpacity": 1,
    "data": {
     "name": "WebFrame11254"
    },
    "width": "50%",
    "paddingBottom": 0
   }
  ],
  "contentOpaque": false,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#CCCCCC"
  ],
  "closeButtonBorderSize": 0,
  "titleFontStyle": "normal",
  "bodyPaddingTop": 10,
  "scrollBarColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "width": 1200,
  "closeButtonPressedBackgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "paddingLeft": 0,
  "height": 600,
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingLeft": 10,
  "titlePaddingRight": 5,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "footerBackgroundColor": [
   "#CCCCCC"
  ],
  "closeButtonBackgroundOpacity": 1,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "shadowVerticalLength": 0,
  "minHeight": 20,
  "headerPaddingBottom": 10,
  "layout": "horizontal",
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonIconLineWidth": 2,
  "bodyBackgroundColorRatios": [
   0
  ],
  "bodyBorderColor": "#000000",
  "id": "window_D17E7E73_DE1A_39BD_41D9_B9C0FB7A6DAD",
  "data": {
   "name": "Window4940"
  },
  "bodyBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonPaddingRight": 10,
  "footerBackgroundOpacity": 1,
  "closeButtonBorderColor": "#000000",
  "headerBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "footerBorderSize": 0,
  "bodyPaddingBottom": 10,
  "titleFontSize": 30,
  "titleTextDecoration": "none",
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontWeight": "bold",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPaddingTop": 10,
  "titleFontColor": "#000000",
  "borderSize": 0,
  "bodyBorderSize": 0,
  "closeButtonPaddingBottom": 10
 },
 {
  "easing": "linear",
  "id": "effect_C581E057_E656_B788_41BF_D9F9187D446D",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "id": "camera_C2BAD169_EB08_65C8_41D1_E2B95EDE6A90",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.16,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2851173_EB08_65D8_41DD_FE43C6831D11",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.14,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C28B317C_EB08_65C8_41C4_4A4D05726982",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.52,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C29ED185_EB08_6538_41E6_E6091A0A6B96",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 135.19,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2E4F18E_EB08_6548_41C2_35F5D1BE1263",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -3.21,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2EA8197_EB08_6558_41E1_73B83642FB4B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2F001A0_EB08_6579_41E5_5B59978EC2BB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.15,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2F941AA_EB08_6548_41E6_C7171E87C88B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -86.38,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2CCC1B2_EB08_6558_41E4_1F4EB33228B2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 91.34,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2D231BC_EB08_6548_41C6_58408D44B0F3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -163.03,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C2D9C1C4_EB08_6538_41E5_11D1D1262DB6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 2.49,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C12C71CD_EB08_64C8_419F_53027E81107C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.97,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C13131D5_EB08_64D8_41A8_28BC0E2DA345",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -38.21,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C103C1DF_EB08_64C8_41E6_C7223D3C6258",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -61.5,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C11471E9_EB08_64C9_41DA_1E80A77290A0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.1,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C11901F2_EB08_64D8_41E0_EC0549FDB6B0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 13.99,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C16BD1FC_EB08_64C8_41DD_680482543527",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 153.28,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C17C2205_EB08_6738_41DF_439A669C5D66",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -7.82,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C14EF20D_EB08_6748_41D8_CB90B3483926",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 61.12,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1553217_EB08_6758_41DF_774C408EC24A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.62,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1A7A220_EB08_6778_41D5_23E643438C99",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.37,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1A88228_EB08_6748_4197_F36B3078732D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -70.87,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1BAC231_EB08_6758_41E2_305D6024A044",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 52.43,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C18F8239_EB08_6748_41E4_09C32D6211B4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -85.55,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1902243_EB08_6738_41C8_F228CE0D9CFC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.68,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1E2F24B_EB08_67C8_41E6_B66138E33521",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.87,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1F77255_EB08_67D8_41B1_93EDA4BDBE42",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -119.12,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1F8225D_EB08_67C8_41D6_32BCE1BF16D3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -126.29,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1CAA267_EB08_67F8_41E3_08CAD1BAC16F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -159.98,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C1DF7270_EB08_67D8_41E3_EC61823BB9B6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.37,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0216278_EB08_67C8_41DC_F509AE90D950",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.11,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C032E281_EB08_6738_41BA_6C2564BC0EFB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.69,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C004E289_EB08_6748_41EC_5F881F54FC17",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 99.08,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0168292_EB08_6758_41EA_C961F02870AF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 123.97,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C018A29B_EB08_6748_41BB_380DC810CBE3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 17.06,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C06AD2A4_EB08_6778_41C3_0032A3A4EBBB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -127.57,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C07CE2BB_EB08_6748_41D1_CE278CCFFCE2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 94.35,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C04EE2CA_EB08_64C8_41B5_FDC3D8D7BD24",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 168.89,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C050E2DD_EB08_64C8_41D5_237907EF4957",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -18.78,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0A2E2F1_EB08_64D8_41E4_900ED7D07221",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 93.69,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0B4E2FF_EB08_64C8_41BF_9B88562BB089",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -166.17,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C086A313_EB08_6558_41C4_5A8C9824F688",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.35,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C08B1327_EB08_6578_41E1_B02D1CEB29EE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.56,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C09CB33A_EB08_6548_41E4_6E06ADE97BE5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 54.59,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0EE534A_EB08_65CB_41E3_71B534D79D0A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.34,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0F0735D_EB08_65C8_41E8_57374DAAE1DD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 125.96,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0C22371_EB08_65D8_41D6_B74EEEA1B63B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.38,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C0D4537F_EB08_65C8_41E0_5B2B9603D7DB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -154.07,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7262393_EB08_6558_41D4_27D6A27709C3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.43,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C72813A7_EB08_6578_41D1_78FA18DF448A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.78,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C73BC3B5_EB08_6558_41C5_DACDDAB653AA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C70DF3CA_EB08_64C8_41B5_D4C0D6F2EFB9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.41,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C71FF3DB_EB08_64C8_41D8_91406D61D2E5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.78,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C761A3E5_EB08_64F8_41C9_3C7FC0B01285",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -65.42,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C773B3EE_EB08_64C8_41E3_B30585D1C2CC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.71,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C74713F7_EB08_64D8_41C8_C396AC443A32",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -10.9,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7491400_EB08_6338_41CE_9E5E67EE60A0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -33.74,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C758C409_EB08_634B_41D8_42DBB22F96BA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 108.79,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7AAC413_EB08_6358_41C7_CF6214ECB869",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -91.96,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7BCC41B_EB08_6348_41E4_6D0DDF3B3994",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.64,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C78EE423_EB08_6378_41BE_7EDC8D00AF07",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.25,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C790F42D_EB08_6348_41ED_1AE6C0580029",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.56,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7E2D437_EB08_6358_41A3_206969C90556",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -112.99,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7F49440_EB08_6338_41E8_10151C8A0BBB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.22,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7C68449_EB08_63C8_41E7_764B51DED3D2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.69,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7C84451_EB08_63D8_41E5_D970243A35AD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.73,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C7DA545A_EB08_63C8_41DF_C24425F7F505",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -2.72,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C62F5464_EB08_63F8_41D4_DFC63E208EEB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.88,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C631046D_EB08_63C8_41BC_D3F034D29547",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 53.49,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6031476_EB08_63D8_41ED_093CA4627898",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -81.08,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C612C47E_EB08_63C8_41E6_F24B9FBCD5A3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 151.7,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6649487_EB08_6338_41E7_21EA696D9396",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.81,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6761491_EB08_6358_41A4_9D4D76058D0F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.33,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C678049B_EB08_6348_41EA_E6806D4DBA28",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.43,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C64BB4A5_EB08_6379_41D7_639648D21483",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.94,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C65DB4AD_EB08_6348_41E3_0DDA0DD33C24",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.29,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6AF24B6_EB08_6358_41EC_1B51F93CE38C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.96,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6B104BF_EB08_6348_41D0_54748DA1C9C2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 161.59,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C68074C9_EB08_6CC8_41E7_675AB9646076",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 172.26,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C692B4D3_EB08_6CD8_41E6_2FCBE46814F5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.52,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6E794DD_EB08_6CC8_41C6_9A547B29A99D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.15,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6E974E7_EB08_6CF8_41DE_4291FB157249",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 19.78,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6F8E4F0_EB08_6CD8_41D6_35FEAB03818B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -28.54,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_C6CAA4FA_EB08_6CC8_41E8_1754513D61FF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -55.81,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15",
 {
  "easing": "cubic_in_out",
  "id": "effect_C6CA34FA_EB08_6CC8_41D1_4D03A2B639CA",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_DE18856A_C7EC_F8CF_41E3_C71294520D66",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_C6CBD4FA_EB08_6CC8_41BA_858CCFE31744",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66",
 {
  "easing": "cubic_in_out",
  "id": "effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_C6CB84FA_EB08_6CC8_41E9_604C746DB48D",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D",
 {
  "easing": "cubic_in_out",
  "id": "effect_DE18156A_C7EC_F8CF_41E7_F42143496994",
  "duration": 0,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_C6C8C4FB_EB08_6CC8_41DB_E8CDCC0018C1",
  "duration": 0,
  "class": "FadeInEffect"
 },
 "this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994",
 {
  "easing": "cubic_in_out",
  "id": "effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB",
 {
  "easing": "cubic_in_out",
  "id": "effect_C6C8D4FB_EB08_6CC8_41C6_3B6260AF059A",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_DBF34FCE_E659_A898_41DB_13300EF76608",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_C6C934FB_EB08_6CC8_41D5_D274C88B2213",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_DBF34FCE_E659_A898_41DB_13300EF76608",
 {
  "easing": "cubic_in_out",
  "id": "effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A",
 {
  "easing": "cubic_in_out",
  "id": "effect_C6D6A4FC_EB08_6CC8_41EA_18676E8314A0",
  "duration": 500,
  "class": "FadeOutEffect"
 }
], "children": [
 {
  "progressHeight": 8,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#000000",
  "minWidth": 100,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#003366",
   "#009966",
   "#006600"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#000000"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "paddingLeft": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowColor": "#333333",
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   0.42,
   0.99
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "bottom",
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "toggle",
  "maxHeight": 512,
  "paddingLeft": 0,
  "height": 90,
  "width": 90,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D_pressed.png",
  "minHeight": 1,
  "maxWidth": 512,
  "shadow": false,
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D",
  "data": {
   "name": "fullscreen"
  },
  "bottom": "3%",
  "horizontalAlign": "right",
  "paddingBottom": 0,
  "transparencyActive": false,
  "iconURL": "skin/IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D.png",
  "right": "3%"
 },
 {
  "verticalAlign": "bottom",
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "push",
  "maxHeight": 512,
  "paddingLeft": 0,
  "height": 90,
  "width": 90,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "class": "IconButton",
  "minHeight": 1,
  "maxWidth": 512,
  "shadow": false,
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969",
  "data": {
   "name": "vr"
  },
  "bottom": "3%",
  "horizontalAlign": "right",
  "paddingBottom": 0,
  "transparencyActive": false,
  "iconURL": "skin/IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969.png",
  "right": "12%"
 },
 {
  "verticalAlign": "bottom",
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "push",
  "maxHeight": 512,
  "paddingLeft": 0,
  "height": 90,
  "width": 90,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "class": "IconButton",
  "minHeight": 1,
  "maxWidth": 512,
  "shadow": false,
  "click": "this.mainPlayList.set('selectedIndex', 3)",
  "cursor": "hand",
  "backgroundOpacity": 0,
  "id": "IconButton_D38C402B_C795_B84D_4192_5A87127999DE",
  "data": {
   "name": "walkthrough"
  },
  "bottom": "3%",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "transparencyActive": false,
  "iconURL": "skin/IconButton_D38C402B_C795_B84D_4192_5A87127999DE.png",
  "right": "47%"
 },
 {
  "verticalAlign": "bottom",
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "push",
  "maxHeight": 512,
  "paddingLeft": 0,
  "height": 90,
  "width": 90,
  "paddingTop": 0,
  "minWidth": 1,
  "borderRadius": 0,
  "class": "IconButton",
  "minHeight": 1,
  "maxWidth": 512,
  "shadow": false,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "cursor": "hand",
  "visible": false,
  "backgroundOpacity": 0,
  "id": "IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD",
  "data": {
   "name": "drone_view"
  },
  "bottom": "3%",
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "transparencyActive": false,
  "iconURL": "skin/IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.png",
  "right": "47%"
 },
 {
  "progressHeight": 8,
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressBottom": 2,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "minWidth": 1,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarBottom": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#003366",
   "#009966",
   "#006600"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#000000"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "paddingLeft": 0,
  "height": "40%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowColor": "#333333",
  "playbackBarLeft": 0,
  "width": "28%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "minHeight": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   0.42,
   0.99
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "top": "0%",
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "visible": false,
  "toolTipBorderColor": "#767676",
  "id": "MapViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "right": "0%"
 },
 {
  "verticalAlign": "top",
  "children": [
   {
    "verticalAlign": "top",
    "children": [
     {
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollEnabled": false,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "100%",
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "backgroundColorRatios": [
       0
      ],
      "class": "WebFrame",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "shadow": false,
      "width": "100%",
      "top": "0%",
      "insetBorder": false,
      "backgroundOpacity": 1,
      "id": "WebFrame_FF12CD68_E64F_A998_41CE_2DB02DF53528",
      "url": "https://sketchfab.com/models/4eeb8f55c0de4521af948a343094baa4/embed",
      "data": {
       "name": "guitar_content"
      },
      "paddingBottom": 0,
      "left": "0%"
     },
     {
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingRight": 0,
      "mode": "push",
      "maxHeight": 256,
      "paddingLeft": 0,
      "height": 49.8,
      "width": 49.8,
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "maxWidth": 256,
      "class": "IconButton",
      "minHeight": 1,
      "shadow": false,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_FD55E9E2_E649_6889_41DC_98E04686D8C4, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E, false, 0, this.effect_F8A13593_E649_D888_4181_C6B58340B31E, 'hideEffect', false)",
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_FD0A5FDB_E64B_A8BF_41E0_6356ECCD2AE0",
      "data": {
       "name": "close_icon"
      },
      "iconURL": "skin/IconButton_FD0A5FDB_E64B_A8BF_41E0_6356ECCD2AE0.png",
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "transparencyActive": false,
      "right": "0%"
     }
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "minWidth": 1,
    "paddingTop": 0,
    "gap": 10,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadow": false,
    "layout": "absolute",
    "creationPolicy": "delayed",
    "top": "15%",
    "scrollBarWidth": 10,
    "visible": false,
    "scrollBarMargin": 2,
    "backgroundOpacity": 1,
    "id": "Container_FD55E9E2_E649_6889_41DC_98E04686D8C4",
    "bottom": "15%",
    "horizontalAlign": "left",
    "paddingBottom": 0,
    "data": {
     "name": "Guitar_container"
    },
    "left": "15%",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "overflow": "visible"
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": "100%",
  "paddingRight": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "gap": 10,
  "borderRadius": 0,
  "class": "Container",
  "backgroundColorDirection": "vertical",
  "minHeight": 1,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "width": "100%",
  "creationPolicy": "delayed",
  "layout": "absolute",
  "scrollBarWidth": 10,
  "visible": false,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.4,
  "id": "Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E",
  "data": {
   "name": "Main_container"
  },
  "bottom": "0%",
  "horizontalAlign": "left",
  "paddingBottom": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969], 'gyroscopeAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_C250A141_EB08_6538_41E0_580A2E5EEB09.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "vrPolyfillScale": 0.65,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "minWidth": 20,
 "layout": "absolute",
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "class": "Player",
 "minHeight": 20,
 "shadow": false,
 "creationPolicy": "delayed",
 "scrollBarMargin": 2,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "mobileMipmappingEnabled": true,
 "id": "rootPlayer",
 "data": {
  "name": "Player449"
 },
 "buttonToggleFullscreen": "this.IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D",
 "desktopMipmappingEnabled": true,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})