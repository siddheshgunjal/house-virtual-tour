TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_DB7ADA05_C7F4_4845_41C5_6840C29968A7",
      "useHandCursor": true,
      "items": [
       {
        "yaw": -8.38,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 100,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -1.05
       }
      ],
      "data": {
       "label": "right_drone"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 50,
           "width": 50,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": -8.38,
        "hfov": 8.79,
        "pitch": -1.05
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_E3AC1222_C795_D87F_41DC_8AD6F2C31684",
      "useHandCursor": true,
      "items": [
       {
        "yaw": -8.07,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 141,
           "width": 141,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 0.4
       }
      ],
      "data": {
       "label": "Drone view"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_4_0_map.gif"
          }
         ]
        },
        "yaw": -8.07,
        "hfov": 12.4,
        "pitch": 0.4
       }
      ],
      "rollOverDisplay": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_DA8577E7_C7FC_47C5_41D5_87D379C8FF30",
      "useHandCursor": false,
      "items": [
       {
        "yaw": -174.6,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 100,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -1.03
       }
      ],
      "data": {
       "label": "left_drone"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 50,
           "width": 50,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "yaw": -174.6,
        "hfov": 8.79,
        "pitch": -1.03
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_EEA09351_C79C_78DD_4180_1BB869DB4BE7",
      "useHandCursor": true,
      "items": [
       {
        "yaw": -174.48,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 142,
           "width": 136,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 0.21
       }
      ],
      "data": {
       "label": "Drone view"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_0_HS_5_0_map.gif"
          }
         ]
        },
        "yaw": -174.48,
        "hfov": 12,
        "pitch": 0.21
       }
      ],
      "rollOverDisplay": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "Drone Shot",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaPlayer",
  "buttonCardboardView": "this.IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.47,
   "pitch": -11.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_DA33AF78_C7FC_48CB_41BF_2A01808519B6",
      "useHandCursor": false,
      "items": [
       {
        "yaw": -11.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 100,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 1.2
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 50,
           "width": 50,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": -11.06,
        "hfov": 8.79,
        "pitch": 1.2
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_EF5EF8E6_C797_C9C7_41D2_C054539A52FF",
      "useHandCursor": true,
      "items": [
       {
        "yaw": -11.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 140,
           "width": 139,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 2.45
       }
      ],
      "data": {
       "label": "Drone view"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_0_HS_2_0_map.gif"
          }
         ]
        },
        "yaw": -11.04,
        "hfov": 12.29,
        "pitch": 2.45
       }
      ],
      "rollOverDisplay": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B4850F51_BF98_2543_41C9_38D43C10D640",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "drone2",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B4850F51_BF98_2543_41C9_38D43C10D640_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B4850F51_BF98_2543_41C9_38D43C10D640_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 29.46,
   "pitch": -9.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_DADA6B39_C7FC_484D_41E4_485FEBCDAAE7",
      "useHandCursor": false,
      "items": [
       {
        "yaw": 174.75,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 100,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.99
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 50,
           "width": 50,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 174.75,
        "hfov": 8.79,
        "pitch": -0.99
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_EEFAD97A_C7AC_48CF_41DD_9AA6EDCCBE54",
      "useHandCursor": true,
      "items": [
       {
        "yaw": 174.58,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 0.38
       }
      ],
      "data": {
       "label": "Drone view"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_0_HS_2_0_map.gif"
          }
         ]
        },
        "yaw": 174.58,
        "hfov": 11.91,
        "pitch": 0.38
       }
      ],
      "rollOverDisplay": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "drone3",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 139.63,
   "pitch": -16.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_A9AB05F1_BFA8_6542_41DC_775CA36036CD",
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68, this.camera_C2694B9B_ECC1_6249_41D8_CF92EC1E4DBC); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 21,
           "width": 36,
           "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "yaw": -0.03,
        "hfov": 6.37,
        "pitch": -8.2
       }
      ],
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_DE1C8E1A_C7F5_C84C_41C7_EF30AC323673",
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_C27F7BA4_ECC1_627F_41C6_17A9D0FCAEAF); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 66,
           "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "yaw": -89.65,
        "hfov": 11.58,
        "pitch": -12.13
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
  "pitch": 0,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -179.75,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_A9A912DF_BFA8_1F7E_41E6_EAA188735695",
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6, this.camera_C13DFB1F_ECC1_6249_41EC_DAB07B857ECD); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 26,
              "width": 34,
              "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "yaw": -179.75,
           "hfov": 6.09,
           "pitch": -7.99
          }
         ],
         "rollOverDisplay": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
     "pitch": 0,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -0.03,
       "panorama": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
       "yaw": -179.75,
       "distance": 1
      }
     ],
     "label": "exterior2",
     "partial": false,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_t.jpg",
     "hfovMax": 110
    },
    "yaw": -0.03,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 90.36,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_DD9531CC_C7F4_BBCB_41CA_D5970CEE328B",
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6, this.camera_C793BDBF_ECC1_6649_41EC_53A70CFD6CC8); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 47,
              "width": 64,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "yaw": 90.36,
           "hfov": 11.33,
           "pitch": -19.05
          }
         ],
         "rollOverDisplay": false
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_EDEC8139_C7B4_F84C_41A9_87FD82C9CA5C",
         "useHandCursor": true,
         "items": [
          {
           "yaw": -88.8,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 25.93,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 300,
              "width": 300,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -10.48
          }
         ],
         "data": {
          "label": "enter_inside"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_EE454CED_C7AD_C9C5_41CE_1B6D0CD0DD10)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 150,
              "width": 150,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -88.8,
           "hfov": 25.93,
           "pitch": -10.48
          }
         ],
         "rollOverDisplay": false
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_EC92F581_C7B4_783D_41E1_7FFA97E9C185",
         "useHandCursor": true,
         "items": [
          {
           "yaw": -88.66,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 30.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 358,
              "width": 346,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -7.54
          }
         ],
         "data": {
          "label": "Enter Inside"
         },
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C7663DC8_ECC1_6637_41B8_5F9A63A34D9D); this.mainPlayList.set('selectedIndex', 13)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_0_HS_3_0_map.gif"
             }
            ]
           },
           "yaw": -88.66,
           "hfov": 30.25,
           "pitch": -7.54
          }
         ],
         "rollOverDisplay": true
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
     "pitch": 0,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -89.65,
       "panorama": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
       "yaw": 90.36,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 89.44,
       "panorama": {
        "vfov": 180,
        "hfovMin": 60,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_EC4DD168_C7B4_F8CB_41DF_818874AE6A20",
            "useHandCursor": false,
            "items": [
             {
              "yaw": 88.93,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 26,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 299,
                 "width": 299,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -9.6
             }
            ],
            "data": {
             "label": "go_outside"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_EE6DCD16_C7AD_C847_41D4_83BB50433155)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 149,
                 "width": 149,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 88.93,
              "hfov": 26,
              "pitch": -9.6
             }
            ],
            "rollOverDisplay": false
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_EC6BFDE8_C7BC_4BCB_41CA_CC33FEE500E3",
            "useHandCursor": true,
            "items": [
             {
              "yaw": 89.44,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 29.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 342,
                 "width": 334,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -6.45
             }
            ],
            "data": {
             "label": "Go Outside"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC, this.camera_C2F53B4C_ECC1_62CF_41C3_DF478DB22587); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_2_0_map.gif"
                }
               ]
              },
              "yaw": 89.44,
              "hfov": 29.22,
              "pitch": -6.45
             }
            ],
            "rollOverDisplay": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_C6A442B2_C868_7CA3_41E3_BD3A98166ACB",
            "useHandCursor": true,
            "data": {
             "label": "to bathroom"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C1134B3B_ECC1_6249_41DA_FAFD66CB1556); this.mainPlayList.set('selectedIndex', 14)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 61,
                 "width": 86,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_3_1_0_map.gif"
                }
               ]
              },
              "yaw": -87.13,
              "hfov": 15.08,
              "pitch": -22.35
             }
            ],
            "rollOverDisplay": false
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_C7D89F69_C868_A5AE_41DB_8E0BC484A451",
            "useHandCursor": true,
            "data": {
             "label": "to stairs"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A, this.camera_C2F8BB55_ECC1_62D9_41E0_20B2F80076E8); this.mainPlayList.set('selectedIndex', 22)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 132,
                 "width": 167,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_4_1_0_map.gif"
                }
               ]
              },
              "yaw": 1.63,
              "hfov": 28.89,
              "pitch": -37.83
             }
            ],
            "rollOverDisplay": false
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_D8640DBD_C869_E4A6_41E4_9C0057C534D0",
            "useHandCursor": true,
            "items": [
             {
              "yaw": -162.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.1,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 166,
                 "width": 154,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -15.62
             }
            ],
            "data": {
             "label": "Living Room"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28, this.camera_C2E6BB43_ECC1_6239_41B2_F4A1D04E6E14); this.mainPlayList.set('selectedIndex', 21)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 17,
                 "width": 16,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_5_0_map.gif"
                }
               ]
              },
              "yaw": -162.94,
              "hfov": 13.1,
              "pitch": -15.62
             }
            ],
            "rollOverDisplay": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_DDFECE2F_C8D9_E7A2_41E3_D89E88412FBF",
            "useHandCursor": true,
            "data": {
             "label": "to common area"
            },
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C1098B32_ECC1_625B_41E6_8E8B965AFE89); this.mainPlayList.set('selectedIndex', 16)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 31,
                 "width": 45,
                 "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_0_HS_6_1_0_map.gif"
                }
               ]
              },
              "yaw": -86.31,
              "hfov": 7.99,
              "pitch": -11.51
             }
            ],
            "rollOverDisplay": false
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
        "pitch": 0,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 93.62,
          "panorama": {
           "vfov": 180,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_DCCB6E15_C8A8_A761_41E7_F86707BF82F5",
               "useHandCursor": true,
               "items": [
                {
                 "yaw": -18.41,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 116,
                    "width": 132,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -13.82
                }
               ],
               "data": {
                "label": "Fireplace"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F, this.camera_C6F29C61_ECC1_66F9_41EC_694C96988594); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 18,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -18.41,
                 "hfov": 11.33,
                 "pitch": -13.82
                }
               ],
               "rollOverDisplay": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_DD4C43A9_C8D8_7CAE_41E8_4BFD85CDB2C0",
               "useHandCursor": true,
               "items": [
                {
                 "yaw": 94.45,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 14.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 167,
                    "width": 178,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -21.13
                }
               ],
               "data": {
                "label": "Hallway"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C6C59C73_ECC1_66D9_41DB_1E397ED21524); this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 17,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 94.45,
                 "hfov": 14.66,
                 "pitch": -21.13
                }
               ],
               "rollOverDisplay": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_DD194812_C8D8_AB62_41B4_E97BDA40E34C",
               "useHandCursor": true,
               "data": {
                "label": "to exit"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C6CEFC85_ECC1_6639_41E3_CC3E9838FD42); this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 32,
                    "width": 47,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_2_1_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 93.62,
                 "hfov": 8.38,
                 "pitch": -11.4
                }
               ],
               "rollOverDisplay": false
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_DDB84FBE_C8D8_64A3_41A1_1535C841E530",
               "useHandCursor": true,
               "items": [
                {
                 "yaw": -166.01,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 17.69,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 239,
                    "width": 223,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -25.98
                }
               ],
               "data": {
                "label": "Kitchen"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C6C07C7C_ECC1_66CF_41D6_1E0014666ECB); this.mainPlayList.set('selectedIndex', 18)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 17,
                    "width": 16,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -166.01,
                 "hfov": 17.69,
                 "pitch": -25.98
                }
               ],
               "rollOverDisplay": true
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_DDC66908_C8E9_AD6F_41C1_C3E0F3939DD5",
               "useHandCursor": true,
               "items": [
                {
                 "yaw": 169.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 13.12,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 97,
                    "width": 153,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -13.91
                }
               ],
               "data": {
                "label": "Dinning Room"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C6FE7C6A_ECC1_66CB_41D4_D68E76A4D711); this.mainPlayList.set('selectedIndex', 19)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 25,
                    "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_0_HS_4_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 169.1,
                 "hfov": 13.12,
                 "pitch": -13.91
                }
               ],
               "rollOverDisplay": true
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
           "pitch": 0,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 161.22,
             "panorama": {
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_DE25A2EE_C8E8_9CA3_41E5_3C284E6ECBB1",
                  "useHandCursor": true,
                  "data": {
                   "label": "common area"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C7A18D9A_ECC1_664B_41E8_B524BF0A979F); this.mainPlayList.set('selectedIndex', 16)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 43,
                       "width": 62,
                       "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_0_1_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 161.22,
                    "hfov": 11.01,
                    "pitch": -16.13
                   }
                  ],
                  "rollOverDisplay": false
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_D106A124_C8E8_7DA7_41E0_3900EF60E623",
                  "useHandCursor": true,
                  "items": [
                   {
                    "yaw": 172.18,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.42,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 78,
                       "width": 85,
                       "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -9.66
                   }
                  ],
                  "data": {
                   "label": "Kitchen"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C7B57DA4_ECC1_667F_41D6_A22F5E814DA8); this.mainPlayList.set('selectedIndex', 18)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 17,
                       "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 172.18,
                    "hfov": 7.42,
                    "pitch": -9.66
                   }
                  ],
                  "rollOverDisplay": true
                 },
                 {
                  "autoplay": true,
                  "vfov": 11.78,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "width": 1080,
                   "mp4Url": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C.mp4"
                  },
                  "id": "overlay_F3C1DC14_EB08_A358_41DA_B75E3A8EEAF9",
                  "loop": true,
                  "class": "VideoPanoramaOverlay",
                  "roll": -0.46,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 1080,
                     "width": 1080,
                     "url": "media/overlay_F3C1DC14_EB08_A358_41DA_B75E3A8EEAF9_t.png"
                    }
                   ]
                  },
                  "rotationY": -4.29,
                  "pitch": -15.2,
                  "enabledInCardboard": true,
                  "yaw": -3.35,
                  "useHandCursor": true,
                  "hfov": 11.86,
                  "rotationX": 15.16
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
              "pitch": 0,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -18.41,
                "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                "yaw": 161.22,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -7.74,
                "panorama": {
                 "vfov": 180,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D00E3D7C_C8E8_65A6_41C9_649BA37A422C",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": -7.74,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 74,
                          "width": 91,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -9.73
                      }
                     ],
                     "data": {
                      "label": "Fireplace"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F, this.camera_C2B10B78_ECC1_62D7_41D5_8C19284B981A); this.mainPlayList.set('selectedIndex', 17)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 19,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -7.74,
                       "hfov": 7.96,
                       "pitch": -9.73
                      }
                     ],
                     "rollOverDisplay": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_DF666A85_C8F8_6F66_41BC_51D9D252EB6B",
                     "useHandCursor": true,
                     "data": {
                      "label": "common area"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C2CF3B5E_ECC1_62CB_41E8_480C6F6D55D2); this.mainPlayList.set('selectedIndex', 16)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 89,
                          "width": 118,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_1_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 13.83,
                       "hfov": 20.55,
                       "pitch": -30.63
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_DFC923E7_C8F8_BCA1_41E3_B56F500B552F",
                     "useHandCursor": true,
                     "data": {
                      "label": "dinning room"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C2DD2B66_ECC1_62FB_41E9_C6FB6BA54F7F); this.mainPlayList.set('selectedIndex', 19)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 64,
                          "width": 53,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_2_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 146.26,
                       "hfov": 9.45,
                       "pitch": -24.84
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D01FC02F_C8FF_BBA2_41CD_2ECB5189F3F5",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": 60.88,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.12,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 121,
                          "width": 131,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -15.83
                      }
                     ],
                     "data": {
                      "label": "Hallway"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C2A32B6F_ECC1_62C9_41C2_65EC9CCB9ABA); this.mainPlayList.set('selectedIndex', 14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 17,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 60.88,
                       "hfov": 11.12,
                       "pitch": -15.83
                      }
                     ],
                     "rollOverDisplay": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_CF9DC2CB_DE1A_0EEC_41C6_FB321C512293",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": -56.47,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 23.57,
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 171,
                          "width": 272,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -10.85
                      }
                     ],
                     "data": {
                      "label": "Polygon"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showWindow(this.window_D17E7E73_DE1A_39BD_41D9_B9C0FB7A6DAD, null, false)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 85,
                          "width": 136,
                          "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_0_HS_5_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -56.47,
                       "hfov": 23.57,
                       "pitch": -10.85
                      }
                     ],
                     "rollOverDisplay": true
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                 "pitch": 0,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -166.01,
                   "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                   "yaw": 13.83,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -26.72,
                   "panorama": {
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_D06BA504_C8F8_A566_41E0_253FC01B6334",
                        "useHandCursor": true,
                        "data": {
                         "label": "kitchen"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C63CAD49_ECC1_66C9_41C5_BE4B54439BB7); this.mainPlayList.set('selectedIndex', 18)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 66,
                             "width": 55,
                             "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_0_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -26.72,
                          "hfov": 9.7,
                          "pitch": -24.58
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_D126A7FB_C8F8_64A2_41C7_3659544DBF6F",
                        "useHandCursor": true,
                        "data": {
                         "label": "common area"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C62ADD40_ECC1_6637_41E5_7A4E98661407); this.mainPlayList.set('selectedIndex', 16)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 42,
                             "width": 60,
                             "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_1_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -11.11,
                          "hfov": 10.55,
                          "pitch": -14.99
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_D199FDF7_C8F8_A4A1_41D0_CC60F0CEAB75",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": 109.13,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 20.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 214,
                             "width": 263,
                             "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -27
                         }
                        ],
                        "data": {
                         "label": "Living Room"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830, this.camera_C601ED52_ECC1_66DB_41DA_41BAFC81FC23); this.mainPlayList.set('selectedIndex', 20)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 15,
                             "width": 19,
                             "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_0_HS_2_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 109.13,
                          "hfov": 20.64,
                          "pitch": -27
                         }
                        ],
                        "rollOverDisplay": true
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
                    "pitch": 0,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 169.1,
                      "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                      "yaw": -11.11,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 146.26,
                      "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                      "yaw": -26.72,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -71.21,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_D105B1AF_C8E9_BCA1_41D4_9572AA11B75D",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28, this.camera_C295BB89_ECC1_6249_41BB_6FBC1AE15FB5); this.mainPlayList.set('selectedIndex', 21)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 83,
                                "width": 108,
                                "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_0_HS_0_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 52.43,
                             "hfov": 18.92,
                             "pitch": -27.35
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_D236BEFE_C8E8_64A2_41D9_57BC127829F2",
                           "useHandCursor": true,
                           "data": {
                            "label": "dinning room"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034, this.camera_C2876B81_ECC1_6239_41AA_8AC7A30915D6); this.mainPlayList.set('selectedIndex', 19)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 87,
                                "width": 115,
                                "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_0_HS_1_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -71.21,
                             "hfov": 20.11,
                             "pitch": -30.37
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "autoplay": true,
                           "vfov": 23.85,
                           "video": {
                            "class": "VideoResource",
                            "height": 1080,
                            "width": 1920,
                            "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
                           },
                           "id": "overlay_D0530539_DE0A_0BAD_41EB_81D3E2A6719D",
                           "loop": true,
                           "class": "VideoPanoramaOverlay",
                           "roll": -2.91,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "height": 1080,
                              "width": 1920,
                              "url": "media/overlay_D0530539_DE0A_0BAD_41EB_81D3E2A6719D_t.png"
                             }
                            ]
                           },
                           "rotationY": 42.61,
                           "pitch": 2.84,
                           "enabledInCardboard": true,
                           "yaw": -2.31,
                           "useHandCursor": true,
                           "hfov": 39.92,
                           "rotationX": -4.21
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 109.13,
                         "panorama": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
                         "yaw": -71.21,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -127.57,
                         "panorama": {
                          "vfov": 180,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_D9E8038E_C878_BD62_41E6_BEFB99E208D6",
                              "useHandCursor": true,
                              "data": {
                               "label": "to exit"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C71FBE18_ECC1_6257_41E3_676074A66542); this.mainPlayList.set('selectedIndex', 13)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 48,
                                   "width": 76,
                                   "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_0_HS_0_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 16.97,
                                "hfov": 13.34,
                                "pitch": -19.67
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_D26E4F15_C8E8_6566_41BE_BE75F5E1452B",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830, this.camera_C708DE0F_ECC1_6249_41C9_1425776F597E); this.mainPlayList.set('selectedIndex', 20)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 77,
                                   "width": 107,
                                   "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_0_HS_1_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -127.57,
                                "hfov": 18.64,
                                "pitch": -28.09
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "autoplay": true,
                              "vfov": 20.44,
                              "video": {
                               "class": "VideoResource",
                               "height": 1080,
                               "width": 1920,
                               "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
                              },
                              "id": "overlay_D02B2BDB_DE0A_3EEC_41E2_28ADFD594549",
                              "loop": true,
                              "class": "VideoPanoramaOverlay",
                              "roll": 1.93,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "height": 2,
                                 "width": 2,
                                 "url": "media/overlay_D02B2BDB_DE0A_3EEC_41E2_28ADFD594549_t.png"
                                }
                               ]
                              },
                              "rotationY": -36.85,
                              "pitch": 2.51,
                              "enabledInCardboard": true,
                              "yaw": -82.52,
                              "useHandCursor": true,
                              "hfov": 34.62,
                              "rotationX": -2.65
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "id": "panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
                          "pitch": 0,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 52.43,
                            "panorama": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
                            "yaw": -127.57,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -162.94,
                            "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
                            "yaw": 16.97,
                            "distance": 1
                           }
                          ],
                          "label": "Dinning Room",
                          "partial": false,
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 267.8,
                            "y": 483.55,
                            "angle": 89.22,
                            "map": {
                             "fieldOfViewOverlayInsideOpacity": 0.6,
                             "fieldOfViewOverlayRadiusScale": 0.08,
                             "class": "Map",
                             "fieldOfViewOverlayInsideColor": "#FFFFFF",
                             "width": 920,
                             "fieldOfViewOverlayOutsideColor": "#000000",
                             "height": 690,
                             "minimumZoomFactor": 1,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 690,
                                "width": 920,
                                "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E.png"
                               },
                               {
                                "class": "ImageResourceLevel",
                                "height": 345,
                                "width": 460,
                                "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_lq.png",
                                "grayscale": true
                               }
                              ]
                             },
                             "maximumZoomFactor": 1,
                             "label": "Downstairs",
                             "id": "map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
                             "overlays": [
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_D7EE3829_E2DE_790F_41E8_5237CA875096",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 406.14,
                                "offsetY": 0,
                                "width": 40,
                                "y": 499.94,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_0_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "hallway_1"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 13)"
                                }
                               ],
                               "image": {
                                "x": 406,
                                "y": 499.8,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 40,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_0.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_A2787109_E2D6_0B0F_41C8_FDE72A492E89",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 408.94,
                                "offsetY": 0,
                                "width": 40,
                                "y": 362.34,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_2_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "hallway_2"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 14)"
                                }
                               ],
                               "image": {
                                "x": 408.8,
                                "y": 362.25,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 40,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_2.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_F2F5DCB2_E342_4B08_41DA_4BA0253E2C0A",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 339.64,
                                "offsetY": 0,
                                "width": 40,
                                "y": 362.81,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 19,
                                   "width": 19,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_4_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "bathroom"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 15)"
                                }
                               ],
                               "image": {
                                "x": 339.5,
                                "y": 362.7,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 39,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_4.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_ED87BC37_E343_CB08_41DD_1BB3DEA1E594",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 187.79,
                                "offsetY": 0,
                                "width": 40,
                                "y": 377.25,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 19,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_5_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "living_1"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 20)"
                                }
                               ],
                               "image": {
                                "x": 187.65,
                                "y": 377.2,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_5.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_A58D9201_E32A_08FF_41CE_640A668AD86D",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 247.91,
                                "offsetY": 0,
                                "width": 40,
                                "y": 463.66,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_3_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "living_2"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 21)"
                                }
                               ],
                               "image": {
                                "x": 247.8,
                                "y": 463.55,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 40,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_3.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_F3343553_E34E_C50F_4194_2CCEA9500751",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 226.07,
                                "offsetY": 0,
                                "width": 40,
                                "y": 276.07,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 19,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_6_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "dinning room"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 19)"
                                }
                               ],
                               "image": {
                                "x": 225.95,
                                "y": 276,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_6.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_ECBF5818_E346_4B07_41CB_64188A829162",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 311.75,
                                "offsetY": 0,
                                "width": 40,
                                "y": 206.3,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 19,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_7_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "kitchen"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 18)"
                                }
                               ],
                               "image": {
                                "x": 311.55,
                                "y": 206.2,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_7.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_F38C1461_E342_3B08_41C0_3A8E60BD838F",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 422.59,
                                "offsetY": 0,
                                "width": 40,
                                "y": 240.58,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_8_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "common_area"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 16)"
                                }
                               ],
                               "image": {
                                "x": 422.45,
                                "y": 240.45,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 40,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_8.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_F1E8C3F3_E346_5D08_41E2_EFE0F9734EF9",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 608.32,
                                "offsetY": 0,
                                "width": 40,
                                "y": 177.28,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 19,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_9_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "fireplace"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 17)"
                                }
                               ],
                               "image": {
                                "x": 608.2,
                                "y": 177.15,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_9.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              },
                              {
                               "class": "AreaHotspotMapOverlay",
                               "id": "overlay_DC356AAA_E2DA_790D_41E7_B70860BFF034",
                               "map": {
                                "class": "HotspotMapOverlayMap",
                                "x": 468.19,
                                "offsetY": 0,
                                "width": 40,
                                "y": 500.21,
                                "height": 40,
                                "offsetX": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 20,
                                   "width": 20,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_1_map.gif"
                                  }
                                 ]
                                }
                               },
                               "useHandCursor": true,
                               "data": {
                                "label": "staircase_1"
                               },
                               "areas": [
                                {
                                 "class": "HotspotMapOverlayArea",
                                 "mapColor": "#FF0000",
                                 "click": "this.mainPlayList.set('selectedIndex', 22)"
                                }
                               ],
                               "image": {
                                "x": 468.05,
                                "y": 500.1,
                                "class": "HotspotMapOverlayImage",
                                "width": 40,
                                "height": 40,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 40,
                                   "width": 40,
                                   "url": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_HS_1.png"
                                  }
                                 ]
                                }
                               },
                               "rollOverDisplay": false
                              }
                             ],
                             "scaleMode": "fit_to_width",
                             "initialZoomFactor": 1,
                             "thumbnailUrl": "media/map_F88D944D_E2D6_0901_41EA_0A5945463C9E_t.png",
                             "fieldOfViewOverlayOutsideOpacity": 0
                            }
                           }
                          ],
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_t.jpg",
                          "hfovMax": 110
                         },
                         "yaw": 52.43,
                         "distance": 1
                        }
                       ],
                       "label": "8_dining_room",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 207.65,
                         "y": 397.2,
                         "angle": 93.35,
                         "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": 109.13,
                      "distance": 1
                     }
                    ],
                    "label": "7_dining_room",
                    "partial": false,
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "x": 245.95,
                      "y": 296,
                      "angle": 88.72,
                      "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
                     }
                    ],
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_t.jpg",
                    "hfovMax": 110
                   },
                   "yaw": 146.26,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -118.88,
                   "panorama": {
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C7EC47D3_C878_64E2_41DB_20F9D6EA587D",
                        "useHandCursor": true,
                        "data": {
                         "label": "to exit"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C640CD1E_ECC1_664B_41B6_9662D42B62DE); this.mainPlayList.set('selectedIndex', 13)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 82,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_0_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 92.85,
                          "hfov": 14.44,
                          "pitch": -22.25
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_D9CBE033_C868_9BA2_41BB_B44007B1A544",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": 178.36,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 25.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 300,
                             "width": 300,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -11.61
                         }
                        ],
                        "data": {
                         "label": "to bathroom"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 150,
                             "width": 150,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 178.36,
                          "hfov": 25.83,
                          "pitch": -11.61
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_D9CDA913_C868_6D62_41DD_5860BCF1BF8A",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": 178.12,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 29.53,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 355,
                             "width": 339,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -8.14
                         }
                        ],
                        "data": {
                         "label": "Washroom"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD, this.camera_C67F7D15_ECC1_6659_41D0_4A873E9DC725); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 16,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_2_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 178.12,
                          "hfov": 29.53,
                          "pitch": -8.14
                         }
                        ],
                        "rollOverDisplay": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_DABEFFE5_C869_E4A6_41E0_E5163FDBAC92",
                        "useHandCursor": true,
                        "data": {
                         "label": "to common area"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD, this.camera_C662DD03_ECC1_6639_41E8_8B87FBB2D2FB); this.mainPlayList.set('selectedIndex', 16)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 67,
                             "width": 88,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_3_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -85.65,
                          "hfov": 15.49,
                          "pitch": -23.43
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_DB538EFD_C8A8_64A6_41AB_A23A93164615",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": -118.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.19,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 144,
                             "width": 155,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_4_0.png"
                            }
                           ]
                          },
                          "pitch": -14.64
                         }
                        ],
                        "data": {
                         "label": "Kitchen"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D, this.camera_C674CD0C_ECC1_664F_41EC_9C3294F6D6F4); this.mainPlayList.set('selectedIndex', 18)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 17,
                             "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_0_HS_4_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -118.88,
                          "hfov": 13.19,
                          "pitch": -14.64
                         }
                        ],
                        "rollOverDisplay": true
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
                    "pitch": 0,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 94.45,
                      "panorama": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
                      "yaw": -85.65,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 60.88,
                      "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
                      "yaw": -118.88,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -1.32,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_DB28A810_C8A8_AB7E_41D3_AD17C52DC956",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": -1.79,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 17.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 200,
                                "width": 200,
                                "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -11.9
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 100,
                                "width": 100,
                                "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -1.79,
                             "hfov": 17.2,
                             "pitch": -11.9
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_DC8B6013_C8A9_9B61_41CF_9495ACCED324",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": -1.32,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 25.13,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 242,
                                "width": 289,
                                "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -9.1
                            }
                           ],
                           "data": {
                            "label": "Exit Washroom"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A, this.camera_C0E22E21_ECC1_6279_41EA_F7E03EC791D9); this.mainPlayList.set('selectedIndex', 14)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 19,
                                "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -1.32,
                             "hfov": 25.13,
                             "pitch": -9.1
                            }
                           ],
                           "rollOverDisplay": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 178.12,
                         "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
                         "yaw": -1.32,
                         "distance": 1
                        }
                       ],
                       "label": "3_1_hallway_bathroom",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 359.5,
                         "y": 382.7,
                         "angle": 88.32,
                         "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": 178.12,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -87.13,
                      "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
                      "yaw": 92.85,
                      "distance": 1
                     }
                    ],
                    "label": "3_hallway",
                    "partial": false,
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "x": 428.8,
                      "y": 382.25,
                      "angle": 90.03,
                      "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
                     }
                    ],
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_t.jpg",
                    "hfovMax": 110
                   },
                   "yaw": 60.88,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 172.18,
                   "panorama": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
                   "yaw": -7.74,
                   "distance": 1
                  }
                 ],
                 "label": "Kitchen",
                 "partial": false,
                 "mapLocations": [
                  {
                   "class": "PanoramaMapLocation",
                   "x": 331.55,
                   "y": 226.2,
                   "angle": 92.79,
                   "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
                  }
                 ],
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_t.jpg",
                 "hfovMax": 110
                },
                "yaw": 172.18,
                "distance": 1
               }
              ],
              "label": "Fireplace",
              "partial": false,
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "x": 628.2,
                "y": 197.15,
                "angle": 90.69,
                "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
               }
              ],
              "hfov": 360,
              "thumbnailUrl": "media/panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_t.jpg",
              "hfovMax": 110
             },
             "yaw": -18.41,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -11.11,
             "panorama": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
             "yaw": 169.1,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -85.65,
             "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
             "yaw": 94.45,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 13.83,
             "panorama": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
             "yaw": -166.01,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -86.31,
             "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
             "yaw": 93.62,
             "distance": 1
            }
           ],
           "label": "4_hallway",
           "partial": false,
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "x": 442.45,
             "y": 260.45,
             "angle": 85.78,
             "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
            }
           ],
           "hfov": 360,
           "thumbnailUrl": "media/panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_t.jpg",
           "hfovMax": 110
          },
          "yaw": -86.31,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 92.85,
          "panorama": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
          "yaw": -87.13,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 16.97,
          "panorama": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
          "yaw": -162.94,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -88.66,
          "panorama": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
          "yaw": 89.44,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -177.51,
          "panorama": {
           "vfov": 180,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_D8ABD223_C878_9FA2_41D1_FFE0CA552C11",
               "useHandCursor": true,
               "data": {
                "label": "to door"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59, this.camera_C7D23D92_ECC1_665B_41C5_1D32EDE16119); this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 118,
                    "width": 151,
                    "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_0_HS_0_1_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -177.51,
                 "hfov": 26.2,
                 "pitch": -43.14
                }
               ],
               "rollOverDisplay": false
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_D3850678_C8E8_67AE_41D2_56C85B5F880B",
               "useHandCursor": true,
               "data": {
                "label": "upstairs"
               },
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7, this.camera_C7CE4D89_ECC1_6649_41B8_42DC97252AC8); this.mainPlayList.set('selectedIndex', 23)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 76,
                    "width": 107,
                    "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_0_HS_1_1_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -87.85,
                 "hfov": 18.77,
                 "pitch": 15.64
                }
               ],
               "rollOverDisplay": false
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
           "pitch": 0,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 92.38,
             "panorama": {
              "vfov": 180,
              "hfovMin": 60,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_C13AAE61_CC53_C6A7_41D7_063911C08472",
                  "useHandCursor": true,
                  "items": [
                   {
                    "yaw": -91.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.58,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 205,
                       "width": 245,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -2.48
                   }
                  ],
                  "data": {
                   "label": "Upstairs"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C6D0AC96_ECC1_665B_41EB_6800B3F2816E); this.mainPlayList.set('selectedIndex', 24)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 19,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -91.06,
                    "hfov": 21.58,
                    "pitch": -2.48
                   }
                  ],
                  "rollOverDisplay": true
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_C35655CC_CC50_45FD_41E6_2F74EBC323CF",
                  "useHandCursor": true,
                  "items": [
                   {
                    "yaw": 92.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 12.38,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 184,
                       "width": 202,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -45.96
                   }
                  ],
                  "data": {
                   "label": "Downstairs"
                  },
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A, this.camera_C6CAAC8D_ECC1_6649_41E5_24232D79C21E); this.mainPlayList.set('selectedIndex', 22)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 17,
                       "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 92.38,
                    "hfov": 12.38,
                    "pitch": -45.96
                   }
                  ],
                  "rollOverDisplay": true
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
              "pitch": 0,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -87.85,
                "panorama": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
                "yaw": 92.38,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 89.48,
                "panorama": {
                 "vfov": 180,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_C2EFADCA_CC50_C5E5_41E4_D0C5E91FC273",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": 89.48,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 13.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 241,
                          "width": 215,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -43.08
                      }
                     ],
                     "data": {
                      "label": "Stairs"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7, this.camera_C0F0DE29_ECC1_6249_418E_A24D8F5E6995); this.mainPlayList.set('selectedIndex', 23)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 17,
                          "width": 16,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 89.48,
                       "hfov": 13.83,
                       "pitch": -43.08
                      }
                     ],
                     "rollOverDisplay": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_C0436561_CCB6_ED18_41C0_8316A0A3B08E",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": 1.14,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19.55,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 229,
                          "width": 229,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -14.26
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 114,
                          "width": 114,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 1.14,
                       "hfov": 19.55,
                       "pitch": -14.26
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_C1CD0F5C_CCB5_7D28_41E8_BF4ADBCDC7A4",
                     "useHandCursor": true,
                     "items": [
                      {
                       "yaw": 1.89,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 23.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 299,
                          "width": 273,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -11.84
                      }
                     ],
                     "data": {
                      "label": "Bedroom"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C0ACDE4D_ECC1_62C9_4186_2312D07F21B0); this.mainPlayList.set('selectedIndex', 25)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 17,
                          "width": 16,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_2_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 1.89,
                       "hfov": 23.54,
                       "pitch": -11.84
                      }
                     ],
                     "rollOverDisplay": true
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_DCAD0BB5_D112_A7F9_41C0_A73D0BFCBAD6",
                     "useHandCursor": true,
                     "data": {
                      "label": "babyroom"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C04A24A6_D116_A19D_41DC_0F73B597F136); this.mainPlayList.set('selectedIndex', 30)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 107,
                          "width": 118,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_3_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 178.95,
                       "hfov": 20.68,
                       "pitch": -38.89
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D7D1A9A4_DB79_88BD_41D2_92061C499506",
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C0C74E32_ECC1_625B_41E7_E443C761B4AE); this.mainPlayList.set('selectedIndex', 30)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 97,
                          "width": 140,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_4_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 180,
                       "hfov": 24.35,
                       "pitch": -40.38
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D516EE04_DB79_8B7C_41EA_287135932B5E",
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C0B38E57_ECC1_62D9_41D4_230961231B6C); this.mainPlayList.set('selectedIndex', 32)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 37,
                          "width": 80,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_5_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 178.78,
                       "hfov": 14.16,
                       "pitch": -25.59
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D450088B_DB7B_888B_419A_30ACB71D8D0D",
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C0DE5E44_ECC1_623F_41E3_FAC31264C620); this.mainPlayList.set('selectedIndex', 34)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 29,
                          "width": 64,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_6_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 178.84,
                       "hfov": 11.33,
                       "pitch": -19.86
                      }
                     ],
                     "rollOverDisplay": false
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_D49BD8EA_DB89_88B4_41C3_7F075ACAF17D",
                     "useHandCursor": true,
                     "data": {
                      "label": "Polygon"
                     },
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C0CA2E3B_ECC1_6249_41E8_0FF1929386BA); this.mainPlayList.set('selectedIndex', 36)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 30,
                          "width": 50,
                          "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_0_HS_7_1_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 179.66,
                       "hfov": 8.81,
                       "pitch": -14.85
                      }
                     ],
                     "rollOverDisplay": false
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                 "pitch": 0,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -91.06,
                   "panorama": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
                   "yaw": 89.48,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 0.04,
                   "panorama": {
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_DF708504_D11E_A09D_41C5_3E8C030C2212",
                        "useHandCursor": true,
                        "data": {
                         "label": "bedroom"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C7F6DD78_ECC1_66D7_41C6_84816D309445); this.mainPlayList.set('selectedIndex', 24)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 111,
                             "width": 137,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_0_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 0.04,
                          "hfov": 23.8,
                          "pitch": -38.72
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C15E1763_D112_A09A_41E8_93C76A568AB9",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": -88.25,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 20.11,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 243,
                             "width": 243,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -19.93
                         }
                        ],
                        "data": {
                         "label": "baby room"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 121,
                             "width": 121,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -88.25,
                          "hfov": 20.11,
                          "pitch": -19.93
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C1A38577_D113_A37B_41C4_2C3FD10C89AA",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": -87.9,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 25.78,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 288,
                             "width": 305,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -16.56
                         }
                        ],
                        "data": {
                         "label": "Baby Room"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790, this.camera_C7FA8D80_ECC1_6637_41E2_8CE6740BF542); this.mainPlayList.set('selectedIndex', 31)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 16,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_2_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -87.9,
                          "hfov": 25.78,
                          "pitch": -16.56
                         }
                        ],
                        "rollOverDisplay": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_CBCB5916_DB8B_899C_41A9_086BD3C17B0A",
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C7E36D6F_ECC1_66C9_41E3_DDA3B419C34D); this.mainPlayList.set('selectedIndex', 32)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 118,
                             "width": 159,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_3_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 177.28,
                          "hfov": 27.47,
                          "pitch": -49.74
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_CA01F5CA_DB88_B8F4_41E3_718A6F0775D3",
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C61E1D66_ECC1_66FB_41ED_9B1F0F31D2B5); this.mainPlayList.set('selectedIndex', 34)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 114,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_4_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 179,
                          "hfov": 19.94,
                          "pitch": -33.04
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_CA1B082D_DB99_B78C_41D8_994BC7CD824F",
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C60AFD5D_ECC1_66C9_41C0_02C7376A31AA); this.mainPlayList.set('selectedIndex', 36)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 50,
                             "width": 75,
                             "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 179.22,
                          "hfov": 13.24,
                          "pitch": -22.02
                         }
                        ],
                        "rollOverDisplay": false
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                    "pitch": 0,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -0.22,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_CCB9F948_DB88_89F4_41B2_72DAF795297C",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C6B64CC3_ECC1_6639_41E0_451847F8E5A6); this.mainPlayList.set('selectedIndex', 34)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 123,
                                "width": 184,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_0_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 1.48,
                             "hfov": 31.53,
                             "pitch": -51.92
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_CD07A8D2_DB89_8894_41E6_C73ED97648E0",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C6912CEA_ECC1_67CB_41EB_B1DAD6DD285C); this.mainPlayList.set('selectedIndex', 32)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 73,
                                "width": 119,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_1_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 0.31,
                             "hfov": 20.82,
                             "pitch": -34.18
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C2A4348B_DB8F_788B_41E8_FD71412828F1",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C6BCACCC_ECC1_67CF_41E0_1EF5B960AC42); this.mainPlayList.set('selectedIndex', 30)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 42,
                                "width": 79,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_2_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -0.22,
                             "hfov": 13.96,
                             "pitch": -22.58
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_CCF78F6D_DB88_898C_41E1_AB09C4ECBF12",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C6841CD5_ECC1_67D9_41D3_E81574C1A912); this.mainPlayList.set('selectedIndex', 24)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 28,
                                "width": 56,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_3_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -0.19,
                             "hfov": 9.9,
                             "pitch": -15.14
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C364D473_DB89_FF94_41D2_AD17F062DD4D",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77, this.camera_C68E8CDF_ECC1_67C9_41E9_DAB0C8043CAD); this.mainPlayList.set('selectedIndex', 37)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 63,
                                "width": 52,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_4_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 118.5,
                             "hfov": 9.13,
                             "pitch": -25.66
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C3DB8C2A_DB8B_8FB4_41D7_1421CC21FC00",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": -126.05,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 21.15,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 232,
                                "width": 260,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_5_0.png"
                               }
                              ]
                             },
                             "pitch": -22.67
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 116,
                                "width": 130,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_5_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -126.05,
                             "hfov": 21.15,
                             "pitch": -22.67
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C3DF99A3_DB88_88B4_41E1_2B89C3B6A814",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": -125.41,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 28.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 297,
                                "width": 343,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_6_0.png"
                               }
                              ]
                             },
                             "pitch": -19.32
                            }
                           ],
                           "data": {
                            "label": "Work Room"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2, this.camera_C69B1CFA_ECC1_67CB_41EC_CEDB9F0FE8E0); this.mainPlayList.set('selectedIndex', 38)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 18,
                                "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_0_HS_6_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -125.41,
                             "hfov": 28.5,
                             "pitch": -19.32
                            }
                           ],
                           "rollOverDisplay": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -179.57,
                         "panorama": {
                          "vfov": 180,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_C8446ED1_DBBB_8894_41D5_BB5FDEA55187",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C720DDF4_ECC1_61DF_41E6_5A1996E897FA); this.mainPlayList.set('selectedIndex', 32)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 137,
                                   "width": 200,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_0_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -1.27,
                                "hfov": 38.15,
                                "pitch": -57.07
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_CCE18655_DBB9_9B9C_41E5_C4DD7A7B95FF",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C74F8DE2_ECC1_61FB_41D0_FC1F28ACE647); this.mainPlayList.set('selectedIndex', 36)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 145,
                                   "width": 191,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_1_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -179.57,
                                "hfov": 32.76,
                                "pitch": -49.47
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_CFFE7F96_DBB8_889C_41D2_051F45AE1076",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C774CDD0_ECC1_61D7_41CA_C48E99DF8D1E); this.mainPlayList.set('selectedIndex', 30)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 74,
                                   "width": 119,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_2_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -1.29,
                                "hfov": 20.82,
                                "pitch": -32.57
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_CD9531BB_DB88_9894_4180_9C693D9E3AE9",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C7376DFD_ECC1_61C9_41A8_6B9C233954C6); this.mainPlayList.set('selectedIndex', 24)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 39,
                                   "width": 71,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_3_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -0.71,
                                "hfov": 12.54,
                                "pitch": -19.34
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_C211FE1C_DB99_8B8C_41D3_FF51E8896138",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77, this.camera_C7523DEB_ECC1_61C9_41DD_733B264801F9); this.mainPlayList.set('selectedIndex', 37)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 61,
                                   "width": 39,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_4_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 141.79,
                                "hfov": 6.91,
                                "pitch": -19.62
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_D2E6F52E_E34E_4518_41D9_B10FB49F4470",
                              "useHandCursor": true,
                              "items": [
                               {
                                "yaw": 87.06,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 18.54,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 222,
                                   "width": 222,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "pitch": -18.72
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 111,
                                   "width": 111,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_5_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 87.06,
                                "hfov": 18.54,
                                "pitch": -18.72
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_CFA25AA7_E341_CF08_41EA_D7BAC5EB54F7",
                              "useHandCursor": true,
                              "items": [
                               {
                                "yaw": 88.04,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 24.16,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 285,
                                   "width": 285,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "pitch": -15.88
                               }
                              ],
                              "data": {
                               "label": "Bathroom"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB, this.camera_C7793DD9_ECC1_61C9_41EC_4ABA6AFA4D01); this.mainPlayList.set('selectedIndex', 35)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 16,
                                   "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_0_HS_6_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 88.04,
                                "hfov": 24.16,
                                "pitch": -15.88
                               }
                              ],
                              "rollOverDisplay": true
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "id": "panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                          "pitch": 0,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 179,
                            "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                            "yaw": -1.29,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -91.86,
                            "panorama": {
                             "vfov": 180,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_CEA443C8_E342_7D18_4170_E0B52A2178E2",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "yaw": -92,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 9.11,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 104,
                                      "width": 104,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -7.16
                                  }
                                 ],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 52,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -92,
                                   "hfov": 9.11,
                                   "pitch": -7.16
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_CE5E8EBC_E343_C778_41E0_E893F8BC64DB",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "yaw": -91.86,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 12.52,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 149,
                                      "width": 143,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -5.17
                                  }
                                 ],
                                 "data": {
                                  "label": "Hallway"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C12B9B16_ECC1_625B_41A2_CE1E15D4A3E6); this.mainPlayList.set('selectedIndex', 34)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 16,
                                      "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -91.86,
                                   "hfov": 12.52,
                                   "pitch": -5.17
                                  }
                                 ],
                                 "rollOverDisplay": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "id": "panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
                             "pitch": 0,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 88.04,
                               "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                               "yaw": -91.86,
                               "distance": 1
                              }
                             ],
                             "label": "24_hallway_bathroom",
                             "partial": false,
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 300.96,
                               "y": 402.33,
                               "angle": 90,
                               "map": {
                                "fieldOfViewOverlayInsideOpacity": 0.6,
                                "fieldOfViewOverlayRadiusScale": 0.08,
                                "class": "Map",
                                "fieldOfViewOverlayInsideColor": "#FFFFFF",
                                "width": 880,
                                "fieldOfViewOverlayOutsideColor": "#000000",
                                "height": 660,
                                "minimumZoomFactor": 1,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 660,
                                   "width": 880,
                                   "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60.png"
                                  },
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 330,
                                   "width": 440,
                                   "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_lq.png",
                                   "grayscale": true
                                  }
                                 ]
                                },
                                "maximumZoomFactor": 1,
                                "label": "Upstairs",
                                "id": "map_B9D26001_E356_08FF_41C9_258C203CFE60",
                                "overlays": [
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_BA007F8A_E356_370D_41AC_727D00FCCFCE",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 448.65,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 376.15,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_0_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "stairs_2"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 23)"
                                   }
                                  ],
                                  "image": {
                                   "x": 448.41,
                                   "y": 375.88,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_0.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_FA2A65C1_E37E_4508_41E8_01749836CCFA",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 451,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 278,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_1_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "hallway_1"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 24)"
                                   }
                                  ],
                                  "image": {
                                   "x": 450.7,
                                   "y": 277.61,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_1.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_FD863C71_E342_4B08_41D1_43C174D07412",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 377.45,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 278.95,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_2_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "hallway_2"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 30)"
                                   }
                                  ],
                                  "image": {
                                   "x": 377.15,
                                   "y": 278.67,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_2.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C2EE2D3E_E346_C578_41E2_40C167B107AB",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 318.25,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 279.3,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_3_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "hallway_3"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 32)"
                                   }
                                  ],
                                  "image": {
                                   "x": 317.99,
                                   "y": 278.88,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_3.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_FC13A0E7_E346_DB08_41E2_D55D21071707",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 278.5,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 279.3,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_4_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "hallway_4"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 34)"
                                   }
                                  ],
                                  "image": {
                                   "x": 278.24,
                                   "y": 278.88,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_4.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C3CFEFCB_E342_4518_41E2_373ADBB2E17F",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 231.45,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 279.3,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_5_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "hallway_5"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 36)"
                                   }
                                  ],
                                  "image": {
                                   "x": 231.16,
                                   "y": 278.88,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_5.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C23D1ABC_E342_4F78_41E4_AC7FA2821B11",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 643.5,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 278.5,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_6_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "bedroom_1"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 25)"
                                   }
                                  ],
                                  "image": {
                                   "x": 643.18,
                                   "y": 278.24,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_6.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C3C4FA75_E342_4F08_41E2_B417E805B031",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 622.8,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 381.3,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_7_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "bedroom_2"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 27)"
                                   }
                                  ],
                                  "image": {
                                   "x": 622.48,
                                   "y": 381.06,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_7.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C2FB9A29_E346_4F19_41B4_3305457D99D2",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 542.15,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 425.2,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_8_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "bedroom_3"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 29)"
                                   }
                                  ],
                                  "image": {
                                   "x": 541.98,
                                   "y": 424.91,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_8.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C2D60A44_E342_4F08_41C4_D0D155E421EF",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 705.75,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 478.55,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_9_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "bedroom_4"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 28)"
                                   }
                                  ],
                                  "image": {
                                   "x": 705.45,
                                   "y": 478.31,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_9.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C0114813_E342_CB08_41D6_5946813067EA",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 644,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 171.5,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_10_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "bedroom_bathroom"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 26)"
                                   }
                                  ],
                                  "image": {
                                   "x": 643.69,
                                   "y": 171.19,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_10.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C7D3BE4D_E35E_4718_41E6_A21090A06799",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 402.25,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 188.5,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_11_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "babyroom"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 31)"
                                   }
                                  ],
                                  "image": {
                                   "x": 401.92,
                                   "y": 188.28,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_11.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C60E5262_E35E_3F08_41DC_6C995183CB29",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 153.6,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 384.6,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_12_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "kidroom"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 37)"
                                   }
                                  ],
                                  "image": {
                                   "x": 153.33,
                                   "y": 384.41,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_12.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_C76DA7D6_E343_C508_41C2_7265264BC291",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 152.65,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 221.65,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_13_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "workroom"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 38)"
                                   }
                                  ],
                                  "image": {
                                   "x": 152.4,
                                   "y": 221.36,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_13.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_A3A9FAFB_E3C2_CCF8_41E0_B5F0A0351212",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 297.8,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 202.4,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_14_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "Image"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 33)"
                                   }
                                  ],
                                  "image": {
                                   "x": 297.5,
                                   "y": 202.11,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_14.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 },
                                 {
                                  "class": "AreaHotspotMapOverlay",
                                  "id": "overlay_A21926B1_E3CF_C708_41C5_681E1D2668B0",
                                  "map": {
                                   "class": "HotspotMapOverlayMap",
                                   "x": 281.25,
                                   "offsetY": 0,
                                   "width": 40,
                                   "y": 382.55,
                                   "height": 40,
                                   "offsetX": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 19,
                                      "width": 19,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_15_map.gif"
                                     }
                                    ]
                                   }
                                  },
                                  "useHandCursor": true,
                                  "data": {
                                   "label": "Image"
                                  },
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "mapColor": "#FF0000",
                                    "click": "this.mainPlayList.set('selectedIndex', 35)"
                                   }
                                  ],
                                  "image": {
                                   "x": 280.96,
                                   "y": 382.33,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 40,
                                   "height": 40,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 39,
                                      "width": 39,
                                      "url": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_HS_15.png"
                                     }
                                    ]
                                   }
                                  },
                                  "rollOverDisplay": false
                                 }
                                ],
                                "scaleMode": "fit_to_width",
                                "initialZoomFactor": 1,
                                "thumbnailUrl": "media/map_B9D26001_E356_08FF_41C9_258C203CFE60_t.png",
                                "fieldOfViewOverlayOutsideOpacity": 0
                               }
                              }
                             ],
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_t.jpg",
                             "hfovMax": 110
                            },
                            "yaw": 88.04,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 1.48,
                            "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                            "yaw": -179.57,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -44.81,
                            "panorama": {
                             "vfov": 180,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C27D8D0F_DB98_898C_41A0_5DB36FAEACD6",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C65FCD2F_ECC1_6649_41C2_6C13ADD3B1B7); this.mainPlayList.set('selectedIndex', 36)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 66,
                                      "width": 50,
                                      "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_0_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -54.04,
                                   "hfov": 8.84,
                                   "pitch": -25.14
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C1031343_DB9B_99F4_41EA_FD03E9FFDAAB",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C64AAD26_ECC1_667B_41C5_C84D32F95171); this.mainPlayList.set('selectedIndex', 34)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 40,
                                      "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_1_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -44.81,
                                   "hfov": 7.13,
                                   "pitch": -19.97
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_FE48F6BE_DBB8_988C_41E7_6E5F718EA85F",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "yaw": -164.7,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 13.46,
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 350,
                                      "width": 153,
                                      "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 11.66
                                  }
                                 ],
                                 "data": {
                                  "label": "guitar"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.setComponentVisibility(this.Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E, true, 0, null, null, false); this.setComponentVisibility(this.Container_FD55E9E2_E649_6889_41DC_98E04686D8C4, true, 0, this.effect_C581E057_E656_B788_41BF_D9F9187D446D, 'showEffect', false)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 175,
                                      "width": 76,
                                      "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_0_HS_2_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -164.7,
                                   "hfov": 13.46,
                                   "pitch": 11.66
                                  }
                                 ],
                                 "rollOverDisplay": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "id": "panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
                             "pitch": 0,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 141.79,
                               "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                               "yaw": -44.81,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 118.5,
                               "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                               "yaw": -54.04,
                               "distance": 1
                              }
                             ],
                             "label": "Kids Room",
                             "partial": false,
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 173.33,
                               "y": 404.41,
                               "angle": 90,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                              }
                             ],
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_t.jpg",
                             "hfovMax": 110
                            },
                            "yaw": 141.79,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 176.79,
                            "panorama": {
                             "vfov": 180,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_CA1B1114_DB8F_799C_41B0_EE5F7FBFB207",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C2539BB6_ECC1_625B_41ED_8832018819D7); this.mainPlayList.set('selectedIndex', 30)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 134,
                                      "width": 182,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_0_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -1.59,
                                   "hfov": 31.34,
                                   "pitch": -48.95
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C969A26A_DB88_BBB4_41E8_05C4F7C0ECB2",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C234FBC7_ECC1_6239_41D6_A2B81DEABB06); this.mainPlayList.set('selectedIndex', 24)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 58,
                                      "width": 89,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_1_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -0.57,
                                   "hfov": 15.69,
                                   "pitch": -24.65
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C91334AE_DB8B_788C_41D2_47769069B806",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686, this.camera_C24D8BAD_ECC1_6249_41DC_74E23DB7A866); this.mainPlayList.set('selectedIndex', 34)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 164,
                                      "width": 200,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_2_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 176.79,
                                   "hfov": 36.88,
                                   "pitch": -57.01
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C82D2A4A_DBB9_8BF4_41E6_EEBB8035DA29",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C23ACBD0_ECC1_61D7_41D7_5E8CDC0D8AFD); this.mainPlayList.set('selectedIndex', 36)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 75,
                                      "width": 112,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_3_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 179.62,
                                   "hfov": 19.66,
                                   "pitch": -33.63
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C9E6D9BA_E346_4D78_41EB_8235BB908C26",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "yaw": -92.62,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 16.55,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 199,
                                      "width": 199,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -18.98
                                  }
                                 ],
                                 "data": {
                                  "label": "Image"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 99,
                                      "width": 99,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -92.62,
                                   "hfov": 16.55,
                                   "pitch": -18.98
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_C8BEC61C_E341_C738_41D5_7C05590D8818",
                                 "useHandCursor": true,
                                 "items": [
                                  {
                                   "yaw": -91.44,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 30.95,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 247,
                                      "width": 367,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -16.51
                                  }
                                 ],
                                 "data": {
                                  "label": "Laundry Room"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38, this.camera_C2272BBE_ECC1_624B_41E5_F199EAA48E45); this.mainPlayList.set('selectedIndex', 33)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 23,
                                      "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_0_HS_5_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -91.44,
                                   "hfov": 30.95,
                                   "pitch": -16.51
                                  }
                                 ],
                                 "rollOverDisplay": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "id": "panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                             "pitch": 0,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -1.27,
                               "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                               "yaw": 176.79,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 177.28,
                               "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                               "yaw": -1.59,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 67.01,
                               "panorama": {
                                "vfov": 180,
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "id": "overlay_CED2B99A_E343_CD38_41D6_5B61954FBECD",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "yaw": 66.18,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 12.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 143,
                                         "width": 143,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -11.81
                                     }
                                    ],
                                    "data": {
                                     "label": "Image"
                                    },
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 71,
                                         "width": 71,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 66.18,
                                      "hfov": 12.38,
                                      "pitch": -11.81
                                     }
                                    ],
                                    "rollOverDisplay": false
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "id": "overlay_CF338DB0_E342_4508_41E4_51FBCD4B4A51",
                                    "useHandCursor": true,
                                    "items": [
                                     {
                                      "yaw": 67.01,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 15.32,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 188,
                                         "width": 176,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -9.66
                                     }
                                    ],
                                    "data": {
                                     "label": "Hallway"
                                    },
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80, this.camera_C73A1E06_ECC1_623B_41C9_9AFB7C1E2B7C); this.mainPlayList.set('selectedIndex', 32)"
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 17,
                                         "width": 16,
                                         "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_0_HS_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 67.01,
                                      "hfov": 15.32,
                                      "pitch": -9.66
                                     }
                                    ],
                                    "rollOverDisplay": true
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2048,
                                     "width": 4096,
                                     "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2001,
                                     "width": 4002,
                                     "url": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "id": "panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
                                "pitch": 0,
                                "class": "Panorama",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -91.44,
                                  "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                                  "yaw": 67.01,
                                  "distance": 1
                                 }
                                ],
                                "label": "22_laundryroom",
                                "partial": false,
                                "mapLocations": [
                                 {
                                  "class": "PanoramaMapLocation",
                                  "x": 317.5,
                                  "y": 222.11,
                                  "angle": 90.99,
                                  "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                                 }
                                ],
                                "hfov": 360,
                                "thumbnailUrl": "media/panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_t.jpg",
                                "hfovMax": 110
                               },
                               "yaw": -91.44,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 178.78,
                               "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                               "yaw": -0.57,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 0.31,
                               "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                               "yaw": 179.62,
                               "distance": 1
                              }
                             ],
                             "label": "21_hallway",
                             "partial": false,
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 337.99,
                               "y": 298.88,
                               "angle": 89.52,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                              }
                             ],
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_t.jpg",
                             "hfovMax": 110
                            },
                            "yaw": -1.27,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 178.84,
                            "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                            "yaw": -0.71,
                            "distance": 1
                           }
                          ],
                          "label": "23_hallway",
                          "partial": false,
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 298.24,
                            "y": 298.88,
                            "angle": 89.43,
                            "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                           }
                          ],
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_t.jpg",
                          "hfovMax": 110
                         },
                         "yaw": 1.48,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 179.22,
                         "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                         "yaw": -0.22,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 179.66,
                         "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                         "yaw": -0.19,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -54.04,
                         "panorama": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
                         "yaw": 118.5,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 179.62,
                         "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                         "yaw": 0.31,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 25.93,
                         "panorama": {
                          "vfov": 180,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_C1986A17_DB99_8B9C_41E4_7A71D98158F9",
                              "useHandCursor": true,
                              "items": [
                               {
                                "yaw": 25.59,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 114,
                                   "width": 114,
                                   "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -9.12
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 57,
                                   "width": 57,
                                   "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 25.59,
                                "hfov": 9.94,
                                "pitch": -9.12
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_C16B24FA_DB99_B894_41E5_1D87170A35B4",
                              "useHandCursor": true,
                              "items": [
                               {
                                "yaw": 25.93,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 12.62,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 158,
                                   "width": 144,
                                   "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -7.19
                               }
                              ],
                              "data": {
                               "label": "Hallway"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6, this.camera_C1078B28_ECC1_6277_41BE_4B1A60A3AC0F); this.mainPlayList.set('selectedIndex', 36)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 17,
                                   "width": 16,
                                   "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_0_HS_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 25.93,
                                "hfov": 12.62,
                                "pitch": -7.19
                               }
                              ],
                              "rollOverDisplay": true
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "id": "panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
                          "pitch": 0,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": -125.41,
                            "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                            "yaw": 25.93,
                            "distance": 1
                           }
                          ],
                          "label": "Work Room",
                          "partial": false,
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 172.4,
                            "y": 241.36,
                            "angle": 90,
                            "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                           }
                          ],
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_t.jpg",
                          "hfovMax": 110
                         },
                         "yaw": -125.41,
                         "distance": 1
                        }
                       ],
                       "label": "25_hallway",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 251.16,
                         "y": 298.88,
                         "angle": 89.41,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": 179.22,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -1.29,
                      "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                      "yaw": 179,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -1.59,
                      "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                      "yaw": 177.28,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 180,
                      "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                      "yaw": 0.04,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 114.58,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C1CD807F_D116_A16B_41E8_63E5DECB41C3",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": 114.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 11.47,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 132,
                                "width": 132,
                                "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -8.98
                            }
                           ],
                           "data": {
                            "label": "hallway"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 66,
                                "width": 66,
                                "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 114.07,
                             "hfov": 11.47,
                             "pitch": -8.98
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_C07CBC2B_D116_A0EB_41D4_4B6C0155BDA4",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": 114.58,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 13.44,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 173,
                                "width": 153,
                                "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -7
                            }
                           ],
                           "data": {
                            "label": "Hallway"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8B558F4_C479_8EC7_41D3_489432109961, this.camera_C29B4B92_ECC1_625B_41CA_16FC5C1C824E); this.mainPlayList.set('selectedIndex', 30)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 18,
                                "width": 16,
                                "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 114.58,
                             "hfov": 13.44,
                             "pitch": -7
                            }
                           ],
                           "rollOverDisplay": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -87.9,
                         "panorama": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
                         "yaw": 114.58,
                         "distance": 1
                        }
                       ],
                       "label": "Baby Room",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 421.92,
                         "y": 208.28,
                         "angle": 88.7,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": -87.9,
                      "distance": 1
                     }
                    ],
                    "label": "19_hallway",
                    "partial": false,
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "x": 397.15,
                      "y": 298.67,
                      "angle": 87.8,
                      "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                     }
                    ],
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_C8B558F4_C479_8EC7_41D3_489432109961_t.jpg",
                    "hfovMax": 110
                   },
                   "yaw": 180,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -0.19,
                   "panorama": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
                   "yaw": 179.66,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -0.71,
                   "panorama": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
                   "yaw": 178.84,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 179.67,
                   "panorama": {
                    "vfov": 180,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C2E437D0_CCBD_6D38_41DB_574D315CFCB2",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": -89.99,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 20.93,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 250,
                             "width": 250,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -17.74
                         }
                        ],
                        "data": {
                         "label": "bathroom"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 125,
                             "width": 125,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -89.99,
                          "hfov": 20.93,
                          "pitch": -17.74
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C3F1C381_CCBF_6518_41DC_89A1709181B9",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": -89.63,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 24.29,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 320,
                             "width": 285,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -14.67
                         }
                        ],
                        "data": {
                         "label": "Bathroom"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9, this.camera_C6A89CBA_ECC1_664B_417E_84A523E7CB86); this.mainPlayList.set('selectedIndex', 26)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 17,
                             "width": 16,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -89.63,
                          "hfov": 24.29,
                          "pitch": -14.67
                         }
                        ],
                        "rollOverDisplay": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C3A1F053_CCBD_E338_41E0_EC5948FC070D",
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C6A49CA8_ECC1_6677_41D3_0F94554CDD7E); this.mainPlayList.set('selectedIndex', 27)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 87,
                             "width": 109,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_2_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 98.92,
                          "hfov": 19.1,
                          "pitch": -29.79
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_DDA1CA3A_CCBB_2768_41C8_15D5A5B7B581",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": 179.5,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.98,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 68,
                             "width": 68,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -5.2
                         }
                        ],
                        "data": {
                         "label": "hallway"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 34,
                             "width": 34,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 179.5,
                          "hfov": 5.98,
                          "pitch": -5.2
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_C35A9EAC_CCBB_3F6F_41E3_D8D195B567A2",
                        "useHandCursor": true,
                        "items": [
                         {
                          "yaw": 179.67,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 94,
                             "width": 77,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_4_0.png"
                            }
                           ]
                          },
                          "pitch": -4.28
                         }
                        ],
                        "data": {
                         "label": "Hallway"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407, this.camera_C6A2FCB1_ECC1_6659_41A3_7A2BB5BBEA54); this.mainPlayList.set('selectedIndex', 24)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 19,
                             "width": 16,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_4_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 179.67,
                          "hfov": 6.83,
                          "pitch": -4.28
                         }
                        ],
                        "rollOverDisplay": true
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "id": "overlay_EB271D04_DB8B_9338_41CF_10CB1D0988BC",
                        "useHandCursor": true,
                        "data": {
                         "label": "Polygon"
                        },
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C6DE8C9F_ECC1_6649_41E4_1240C8AF4C5C); this.mainPlayList.set('selectedIndex', 29)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 49,
                             "width": 66,
                             "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 124.19,
                          "hfov": 11.63,
                          "pitch": -16.5
                         }
                        ],
                        "rollOverDisplay": false
                       },
                       {
                        "autoplay": true,
                        "vfov": 9.99,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "width": 1920,
                         "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
                        },
                        "id": "overlay_CEF84CB3_DE1A_1ABD_41E3_FEE23B2068F8",
                        "loop": true,
                        "class": "VideoPanoramaOverlay",
                        "roll": 1.25,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 1080,
                           "width": 1920,
                           "url": "media/overlay_CEF84CB3_DE1A_1ABD_41E3_FEE23B2068F8_t.png"
                          }
                         ]
                        },
                        "rotationY": -35.44,
                        "pitch": 1.58,
                        "enabledInCardboard": true,
                        "yaw": 142.82,
                        "useHandCursor": true,
                        "hfov": 16.72,
                        "rotationX": -1.69
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2048,
                         "width": 4096,
                         "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                    "pitch": 0,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -56.03,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_DF139474_CCDD_23FF_41DE_6FD334612D95",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C6F6BC58_ECC1_66D7_41E2_6FAA33F7154C); this.mainPlayList.set('selectedIndex', 27)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 96,
                                "width": 120,
                                "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_0_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -28.3,
                             "hfov": 21.01,
                             "pitch": -31.97
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_D8CD8EAF_CCDB_3F69_41DE_7D1EB39088EF",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE, this.camera_C6E8AC46_ECC1_663B_41ED_8F364021AC82); this.mainPlayList.set('selectedIndex', 28)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 53,
                                "width": 72,
                                "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_1_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 20.02,
                             "hfov": 12.73,
                             "pitch": -19.04
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_EA3A1A93_DB88_9159_41C4_D420F105FA80",
                           "useHandCursor": true,
                           "data": {
                            "label": "Polygon"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C6F5EC4F_ECC1_66C9_41EA_9F9827D46ACB); this.mainPlayList.set('selectedIndex', 25)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 45,
                                "width": 66,
                                "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_0_HS_2_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -56.03,
                             "hfov": 11.64,
                             "pitch": -17.63
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "autoplay": true,
                           "vfov": 30.03,
                           "video": {
                            "class": "VideoResource",
                            "height": 1080,
                            "width": 1920,
                            "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
                           },
                           "id": "overlay_D1623519_DE06_0B6C_41BA_9A57A03B4936",
                           "loop": true,
                           "class": "VideoPanoramaOverlay",
                           "roll": -2.93,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "class": "ImageResourceLevel",
                              "height": 1080,
                              "width": 1920,
                              "url": "media/overlay_D1623519_DE06_0B6C_41BA_9A57A03B4936_t.png"
                             }
                            ]
                           },
                           "rotationY": 30.95,
                           "pitch": 4.83,
                           "enabledInCardboard": true,
                           "yaw": -148.99,
                           "useHandCursor": true,
                           "hfov": 49.96,
                           "rotationX": -5.84
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -160.22,
                         "panorama": {
                          "vfov": 180,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_DFF81448_CCDB_E317_41CE_A0625A67A2F3",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E, this.camera_C7B92DAD_ECC1_6649_41D6_7CF3DD02720C); this.mainPlayList.set('selectedIndex', 27)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 67,
                                   "width": 90,
                                   "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_0_HS_0_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -126.51,
                                "hfov": 15.77,
                                "pitch": -24.17
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "id": "overlay_DFB6275D_CCDD_2D28_4187_50B1593081B7",
                              "useHandCursor": true,
                              "data": {
                               "label": "Polygon"
                              },
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C78C8DB6_ECC1_665B_41E5_52E519A84238); this.mainPlayList.set('selectedIndex', 29)"
                               }
                              ],
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 54,
                                   "width": 71,
                                   "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_0_HS_1_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -160.22,
                                "hfov": 12.45,
                                "pitch": -18.57
                               }
                              ],
                              "rollOverDisplay": false
                             },
                             {
                              "autoplay": true,
                              "vfov": 8.33,
                              "video": {
                               "class": "VideoResource",
                               "height": 1080,
                               "width": 1920,
                               "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
                              },
                              "id": "overlay_CE9C7F91_DE06_377D_41D3_5EB9976CA43A",
                              "loop": true,
                              "class": "VideoPanoramaOverlay",
                              "roll": -0.78,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "height": 1080,
                                 "width": 1920,
                                 "url": "media/overlay_CE9C7F91_DE06_377D_41D3_5EB9976CA43A_t.png"
                                }
                               ]
                              },
                              "rotationY": 23.39,
                              "pitch": 1.35,
                              "enabledInCardboard": true,
                              "yaw": -157.16,
                              "useHandCursor": true,
                              "hfov": 14.44,
                              "rotationX": -1.46
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2048,
                               "width": 4096,
                               "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 2001,
                               "width": 4002,
                               "url": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "id": "panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
                          "pitch": 0,
                          "class": "Panorama",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 53.71,
                            "panorama": {
                             "vfov": 180,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_DC3222D0_CCCD_2737_41A4_BA7503594E1A",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C21EEBE1_ECC1_61F9_41ED_595DD56681C1); this.mainPlayList.set('selectedIndex', 25)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 89,
                                      "width": 111,
                                      "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_0_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": -80.92,
                                   "hfov": 19.48,
                                   "pitch": -29.62
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_DE8E1B61_CCCD_6519_41BA_35B534CB542B",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE, this.camera_C2088BD9_ECC1_61C9_41EB_F94AC12CF14C); this.mainPlayList.set('selectedIndex', 28)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 65,
                                      "width": 92,
                                      "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_1_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 53.71,
                                   "hfov": 16.18,
                                   "pitch": -25.54
                                  }
                                 ],
                                 "rollOverDisplay": false
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "id": "overlay_DEA11382_CCCF_E51B_41E8_ACEC04E334B6",
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5, this.camera_C6EF9C3B_ECC1_6648_41DE_2401AC98748D); this.mainPlayList.set('selectedIndex', 29)"
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 94,
                                      "width": 121,
                                      "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_0_HS_2_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 151.46,
                                   "hfov": 21.16,
                                   "pitch": -32.72
                                  }
                                 ],
                                 "rollOverDisplay": false
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2048,
                                  "width": 4096,
                                  "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2001,
                                  "width": 4002,
                                  "url": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "id": "panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                             "pitch": 0,
                             "class": "Panorama",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -126.51,
                               "panorama": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
                               "yaw": 53.71,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": 98.92,
                               "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                               "yaw": -80.92,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "backwardYaw": -28.3,
                               "panorama": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                               "yaw": 151.46,
                               "distance": 1
                              }
                             ],
                             "label": "15_bedroom",
                             "partial": false,
                             "mapLocations": [
                              {
                               "class": "PanoramaMapLocation",
                               "x": 642.48,
                               "y": 401.06,
                               "angle": 89.36,
                               "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                              }
                             ],
                             "hfov": 360,
                             "thumbnailUrl": "media/panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_t.jpg",
                             "hfovMax": 110
                            },
                            "yaw": -126.51,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "backwardYaw": 20.02,
                            "panorama": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
                            "yaw": -160.22,
                            "distance": 1
                           }
                          ],
                          "label": "16_bedroom",
                          "partial": false,
                          "mapLocations": [
                           {
                            "class": "PanoramaMapLocation",
                            "x": 725.45,
                            "y": 498.31,
                            "angle": 86.28,
                            "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                           }
                          ],
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_t.jpg",
                          "hfovMax": 110
                         },
                         "yaw": 20.02,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 124.19,
                         "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                         "yaw": -56.03,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": 151.46,
                         "panorama": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                         "yaw": -28.3,
                         "distance": 1
                        }
                       ],
                       "label": "18_bedroom",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 561.98,
                         "y": 444.91,
                         "angle": 90.44,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": 124.19,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -80.92,
                      "panorama": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
                      "yaw": 98.92,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 1.89,
                      "panorama": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
                      "yaw": 179.67,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 89.31,
                      "panorama": {
                       "vfov": 180,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_DDA7FD2F_CCB7_1D68_41CC_6165AF4A7FF1",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": 88.77,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 13.09,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 151,
                                "width": 151,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -9.52
                            }
                           ],
                           "data": {
                            "label": "exit bathroom"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 75,
                                "width": 75,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 88.77,
                             "hfov": 13.09,
                             "pitch": -9.52
                            }
                           ],
                           "rollOverDisplay": false
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "id": "overlay_DC472A0C_CCB6_E72F_41D2_54853F6D4E00",
                           "useHandCursor": true,
                           "items": [
                            {
                             "yaw": 89.31,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 22.12,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 192,
                                "width": 254,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -7.94
                            }
                           ],
                           "data": {
                            "label": "Exit Bathroom"
                           },
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0, this.camera_C6219D38_ECC1_6657_41EB_A38ECD6029D5); this.mainPlayList.set('selectedIndex', 25)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 21,
                                "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 89.31,
                             "hfov": 22.12,
                             "pitch": -7.94
                            }
                           ],
                           "rollOverDisplay": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2048,
                            "width": 4096,
                            "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "id": "panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
                       "pitch": 0,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "backwardYaw": -89.63,
                         "panorama": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
                         "yaw": 89.31,
                         "distance": 1
                        }
                       ],
                       "label": "14_bedroom_bathroom",
                       "partial": false,
                       "mapLocations": [
                        {
                         "class": "PanoramaMapLocation",
                         "x": 663.69,
                         "y": 191.19,
                         "angle": 91.07,
                         "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                        }
                       ],
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_t.jpg",
                       "hfovMax": 110
                      },
                      "yaw": -89.63,
                      "distance": 1
                     }
                    ],
                    "label": "Master Bedroom",
                    "partial": false,
                    "mapLocations": [
                     {
                      "class": "PanoramaMapLocation",
                      "x": 663.18,
                      "y": 298.24,
                      "angle": 88.3,
                      "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                     }
                    ],
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_t.jpg",
                    "hfovMax": 110
                   },
                   "yaw": 1.89,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -0.57,
                   "panorama": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
                   "yaw": 178.78,
                   "distance": 1
                  }
                 ],
                 "label": "12_hallway",
                 "partial": false,
                 "mapLocations": [
                  {
                   "class": "PanoramaMapLocation",
                   "x": 470.7,
                   "y": 297.61,
                   "angle": 90.02,
                   "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
                  }
                 ],
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_t.jpg",
                 "hfovMax": 110
                },
                "yaw": -91.06,
                "distance": 1
               }
              ],
              "label": "11_staircase",
              "partial": false,
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "x": 468.41,
                "y": 395.88,
                "angle": 92.85,
                "map": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60"
               }
              ],
              "hfov": 360,
              "thumbnailUrl": "media/panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_t.jpg",
              "hfovMax": 110
             },
             "yaw": -87.85,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 1.63,
             "panorama": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
             "yaw": -177.51,
             "distance": 1
            }
           ],
           "label": "10_staircase",
           "partial": false,
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "x": 488.05,
             "y": 520.1,
             "angle": 87.65,
             "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
            }
           ],
           "hfov": 360,
           "thumbnailUrl": "media/panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_t.jpg",
           "hfovMax": 110
          },
          "yaw": 1.63,
          "distance": 1
         }
        ],
        "label": "House Entry",
        "partial": false,
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "x": 426,
          "y": 519.8,
          "angle": 90.68,
          "map": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E"
         }
        ],
        "hfov": 360,
        "thumbnailUrl": "media/panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_t.jpg",
        "hfovMax": 110
       },
       "yaw": -88.66,
       "distance": 1
      }
     ],
     "label": "1_door",
     "partial": false,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_C81ED583_C479_8742_41D0_080898C5BAEC_t.jpg",
     "hfovMax": 110
    },
    "yaw": -89.65,
    "distance": 1
   }
  ],
  "label": "Exterior",
  "partial": false,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.8,
   "pitch": -5.23
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
 {
  "class": "PanoramaCamera",
  "id": "panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior3",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior4",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_B318685E_BF99_EB41_41CC_707E9BA43473",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior5",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B318685E_BF99_EB41_41CC_707E9BA43473_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B318685E_BF99_EB41_41CC_707E9BA43473_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_CF976575_C477_87C6_41CD_A3267E60C7DF",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior6",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior7",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior8",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_C859FD08_C476_874E_41C1_1303C257A657",
  "pitch": 0,
  "class": "Panorama",
  "partial": false,
  "label": "exterior9",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_C859FD08_C476_874E_41C1_1303C257A657_t.jpg",
  "hfovMax": 110
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C859FD08_C476_874E_41C1_1303C257A657_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C81ED583_C479_8742_41D0_080898C5BAEC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.53,
   "pitch": -0.49
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
 {
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.33,
   "pitch": -0.53
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.04,
   "pitch": -4.28
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.12,
   "pitch": -7.56
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.54,
   "pitch": -1.28
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.41,
   "pitch": -14.97
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 98.85,
   "pitch": -11.25
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -145.04,
   "pitch": -6.15
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.95,
   "pitch": -4.6
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90,
   "pitch": -5.19
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 177.89,
   "pitch": -8.2
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 87.89,
   "pitch": -2.77
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.61,
   "pitch": -3
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.36,
   "pitch": -10.43
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8B558F4_C479_8EC7_41D3_489432109961_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 174.78,
   "pitch": -3.26
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.34,
   "pitch": -4.74
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.91,
   "pitch": -7.6
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.09,
   "pitch": -0.75
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 46.89,
   "pitch": -1.36
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.49,
   "pitch": -3.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF",
    "camera": "this.panorama_B50786D0_BF98_6743_41E3_71F35BBB15DF_camera",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.registerKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD', this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.get('visible')); this.registerKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE', this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15, 'showEffect', false); this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66, 'hideEffect', false); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')){ if(this.getKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')) { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_C0B24E57_ECC1_62D9_41E7_82CA6DBCCC35, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE'); if(this.existsKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')){ if(this.getKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')) { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_C0B26E58_ECC1_62D7_41E5_3578F3615FCB, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD'); if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_C0B21E58_ECC1_62D7_41CA_1270D3FAA81B, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B4850F51_BF98_2543_41C9_38D43C10D640",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B4850F51_BF98_2543_41C9_38D43C10D640_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B350F036_BF98_7AC1_41CB_437F5C0144F0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6",
    "camera": "this.panorama_B3139C8F_BF98_EBDF_41D3_5C7893C41EF6_camera",
    "begin": "this.registerKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD', this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.get('visible')); this.registerKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE', this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994, 'hideEffect', false); this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')){ if(this.getKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE')) { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, true, -1, this.effect_C0BD5E58_ECC1_62D7_41D8_A25854ACDDF4, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D38C402B_C795_B84D_4192_5A87127999DE, false, -1, this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D38C402B_C795_B84D_4192_5A87127999DE'); if(this.existsKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')){ if(this.getKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')) { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, true, -1, this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD, false, -1, this.effect_C0BD1E58_ECC1_62D7_41E1_7CF7AA38BAC1, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD')"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B36F1607_BF98_26CF_41D0_F488A1247D68_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B31C41B1_BF98_1DC3_41E2_02EFBD36DA0D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B343927F_BF98_1F3F_41E7_7FD88BCD38C1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_B318685E_BF99_EB41_41CC_707E9BA43473",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B318685E_BF99_EB41_41CC_707E9BA43473_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_CF976575_C477_87C6_41CD_A3267E60C7DF",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CF976575_C477_87C6_41CD_A3267E60C7DF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C84309D1_C477_8EDE_41E5_BDA3EED72C2E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8447B45_C476_83C1_41E1_DE265ABC3F31_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_C859FD08_C476_874E_41C1_1303C257A657",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C859FD08_C476_874E_41C1_1303C257A657_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC",
    "camera": "this.panorama_C81ED583_C479_8742_41D0_080898C5BAEC_camera",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.MapViewer, false, -1, this.effect_DBF34FCE_E659_A898_41DB_13300EF76608, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_C0BFCE59_ECC1_62C9_41AA_6BF3E58B5618, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_DBF34FCE_E659_A898_41DB_13300EF76608, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1774AF1_ECC1_63D9_41E4_7C7DC2B74560",
    "media": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59",
    "end": "if(this.existsKey('visibility_MapViewer')){ if(this.getKey('visibility_MapViewer')) { this.setComponentVisibility(this.MapViewer, true, -1, this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A, 'showEffect', false); } else { this.setComponentVisibility(this.MapViewer, false, -1, this.effect_C0BF8E59_ECC1_62C9_41DC_0D655B24A2D8, 'hideEffect', false); } }; this.unregisterKey('visibility_MapViewer')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1774AF1_ECC1_63D9_41E4_7C7DC2B74560, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C840319D_C47A_9F41_41B7_B9DA94B29D59_camera",
    "begin": "this.registerKey('visibility_MapViewer', this.MapViewer.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.MapViewer, true, -1, this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C176EAF2_ECC1_63DB_41DD_95AC869381A4",
    "media": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C176EAF2_ECC1_63DB_41DD_95AC869381A4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C84F1BC3_C47A_82C1_41D1_150CE4EA120A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1765AF2_ECC1_63DB_41BB_7660EAA2AAD9",
    "media": "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1765AF2_ECC1_63DB_41BB_7660EAA2AAD9, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C85786E8_C47A_82CE_41E6_9E25AF5051BD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C171DAF2_ECC1_63DB_41C0_68B2C32F921E",
    "media": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C171DAF2_ECC1_63DB_41C0_68B2C32F921E, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C94268BB_C479_8D41_41DA_151EFA3F0CCD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1716AF2_ECC1_63DB_41D9_BA8015DB9028",
    "media": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1716AF2_ECC1_63DB_41D9_BA8015DB9028, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8C57AB2_C479_8D42_41E5_061A40A70F9F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C170FAF3_ECC1_63D9_41C8_E532D0CE764C",
    "media": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C170FAF3_ECC1_63D9_41C8_E532D0CE764C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8DC0C5B_C47E_85C2_41E6_80AE138EB23D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1707AF3_ECC1_63D9_41E7_CF6A438C6F86",
    "media": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1707AF3_ECC1_63D9_41E7_CF6A438C6F86, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C800B4BD_C47E_8541_41D8_FB0899EAD034_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C173FAF3_ECC1_63D9_41D4_CDEC3526C2E2",
    "media": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C173FAF3_ECC1_63D9_41D4_CDEC3526C2E2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8CA27CA_C479_82C3_41D8_ECB6EBA5D830_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1737AF3_ECC1_63D9_41ED_1B360A70C638",
    "media": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1737AF3_ECC1_63D9_41ED_1B360A70C638, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8C3B2A2_C479_9D43_41E8_8D3DCD75AF28_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1728AF4_ECC1_63DF_41E5_7D3AD3FE6184",
    "media": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1728AF4_ECC1_63DF_41E5_7D3AD3FE6184, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8BC6EC8_C479_82CF_41E4_756ECAC7838A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1720AF4_ECC1_63DF_41EA_5C820CA63755",
    "media": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1720AF4_ECC1_63DF_41EA_5C820CA63755, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8BAEA66_C47A_8DC2_41E7_10F18C4FC5C7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17D9AF4_ECC1_63DF_41DA_F176D70DC3CE",
    "media": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17D9AF4_ECC1_63DF_41DA_F176D70DC3CE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8909A28_C47B_8D4E_419C_63A8E445F407_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17D1AF4_ECC1_63DF_41EA_C4F257567713",
    "media": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17D1AF4_ECC1_63DF_41EA_C4F257567713, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8BF7584_C47B_8746_41DE_CBBC45B5AEB0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17C9AF4_ECC1_63DF_41E6_447B3B361182",
    "media": "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17C9AF4_ECC1_63DF_41E6_447B3B361182, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8B8B466_C47B_85C2_419C_A211C4A0F2E9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17C1AF5_ECC1_63D9_41E8_70DB8DC9DB22",
    "media": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17C1AF5_ECC1_63D9_41E8_70DB8DC9DB22, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8BDA4EC_C47A_86C6_41E7_6C496F434B6E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17F9AF5_ECC1_63D9_41E0_0A25BD7A752B",
    "media": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17F9AF5_ECC1_63D9_41E0_0A25BD7A752B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8C3AD54_C47A_87C6_41E6_4FD10FA6CACE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17F2AF5_ECC1_63D9_41B2_0270F4CCFEDE",
    "media": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17F2AF5_ECC1_63D9_41B2_0270F4CCFEDE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8C4F476_C479_85C2_41E5_4249C81E00B5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17EBAF5_ECC1_63D9_41C8_960D900BB5F7",
    "media": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17EBAF5_ECC1_63D9_41C8_960D900BB5F7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8B558F4_C479_8EC7_41D3_489432109961_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17E3AF6_ECC1_63DB_41EC_BE68AFD24A7B",
    "media": "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17E3AF6_ECC1_63DB_41EC_BE68AFD24A7B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8BD1CFD_C479_86C1_41D4_775AA96A1790_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17F2AF6_ECC1_63DB_41E3_D7393634E84F",
    "media": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17F2AF6_ECC1_63DB_41E3_D7393634E84F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8B4EB7D_C476_83C1_41D0_F2063FA2AF80_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17EAAF6_ECC1_63DB_41A2_E0554DA9CCFF",
    "media": "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17EAAF6_ECC1_63DB_41A2_E0554DA9CCFF, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8AFABED_C476_82C6_41E3_326C37A17C38_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C17E0AF6_ECC1_63DB_41C1_A894963ABF27",
    "media": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C17E0AF6_ECC1_63DB_41C1_A894963ABF27, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8A60A51_C476_8DDE_41E2_3A72923D2686_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1799AF7_ECC1_63D9_41EC_C0F0FDB3A1DE",
    "media": "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1799AF7_ECC1_63D9_41EC_C0F0FDB3A1DE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8B0E258_C477_BDCE_41E3_7B1E8E25BDAB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1792AF7_ECC1_63D9_41DB_B1B804DC0BD4",
    "media": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1792AF7_ECC1_63D9_41DB_B1B804DC0BD4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8ADE9E4_C477_8EC6_41E7_49F4269539C6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C178AAF7_ECC1_63D9_41E8_428D58DE8E65",
    "media": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C178AAF7_ECC1_63D9_41E8_428D58DE8E65, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C8AE643A_C477_8542_41D7_6CD3E2156A77_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_C1783AF7_ECC1_63D9_41E7_68A893EC673F",
    "media": "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2",
    "end": "this.trigger('tourEnded')",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_C1783AF7_ECC1_63D9_41E7_68A893EC673F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C88992ED_C476_82C6_41D2_90DE8A222CB2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)"
   }
  ]
 },
 "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
 {
  "class": "PlayList",
  "id": "playList_C16E4AEE_ECC1_63CB_41E5_15D0F7753795",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
 {
  "class": "PlayList",
  "id": "playList_C16E7AEE_ECC1_63CB_41A9_8FC4F5FBC9C7",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "height": 1080,
  "label": "Rotasia Promo Video (NEXT)",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1920,
   "mp4Url": "media/video_DB614D57_CCCD_1D39_41E4_4A60731B3698.mp4"
  },
  "class": "Video",
  "width": 1920,
  "id": "video_DB614D57_CCCD_1D39_41E4_4A60731B3698",
  "loop": false,
  "thumbnailUrl": "media/video_DB614D57_CCCD_1D39_41E4_4A60731B3698_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 {
  "class": "PlayList",
  "id": "playList_C16E3AEF_ECC1_63C9_41BB_7BF491A7B993",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_DB614D57_CCCD_1D39_41E4_4A60731B3698",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C16E3AEF_ECC1_63C9_41BB_7BF491A7B993, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C16E3AEF_ECC1_63C9_41BB_7BF491A7B993, 0, this.video_DB614D57_CCCD_1D39_41E4_4A60731B3698)"
   }
  ]
 },
 {
  "height": 1080,
  "label": "Intro video for travel",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1920,
   "mp4Url": "media/video_D0725878_DE0A_39AB_41E1_34180C230195.mp4"
  },
  "class": "Video",
  "width": 1920,
  "id": "video_D0725878_DE0A_39AB_41E1_34180C230195",
  "loop": false,
  "thumbnailUrl": "media/video_D0725878_DE0A_39AB_41E1_34180C230195_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_C169FAEF_ECC1_63C9_41D3_6B63EA7C5EA3",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D0725878_DE0A_39AB_41E1_34180C230195",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C169FAEF_ECC1_63C9_41D3_6B63EA7C5EA3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C169FAEF_ECC1_63C9_41D3_6B63EA7C5EA3, 0, this.video_D0725878_DE0A_39AB_41E1_34180C230195)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C169AAEF_ECC1_63C9_41EA_2BFE6FE93905",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_F88D944D_E2D6_0901_41EA_0A5945463C9E",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_C1696AEF_ECC1_63C9_41E8_E78A83778AD7",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B9D26001_E356_08FF_41C9_258C203CFE60",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "height": 1080,
  "label": "chimney fire",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1080,
   "mp4Url": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C.mp4"
  },
  "class": "Video",
  "width": 1080,
  "id": "video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C",
  "loop": false,
  "thumbnailUrl": "media/video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_C1697AEF_ECC1_63C9_41DC_748B1715913A",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C1697AEF_ECC1_63C9_41DC_748B1715913A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C1697AEF_ECC1_63C9_41DC_748B1715913A, 0, this.video_F27CAD49_EB07_DDC8_41EA_3CC3F774011C)"
   }
  ]
 },
 {
  "class": "FadeOutEffect",
  "duration": 200,
  "easing": "linear",
  "id": "effect_F8A13593_E649_D888_4181_C6B58340B31E"
 },
 {
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBorderColor": "#000000",
  "backgroundColor": [],
  "scrollBarMargin": 2,
  "footerHeight": 5,
  "modal": true,
  "class": "Window",
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 1,
  "minWidth": 20,
  "headerBorderSize": 0,
  "bodyBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverIconLineWidth": 1,
  "footerBorderSize": 0,
  "footerBackgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingBottom": 10,
  "titleFontSize": 30,
  "closeButtonBorderColor": "#000000",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "closeButtonPaddingRight": 10,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPaddingTop": 10,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "shadow": true,
  "titleFontWeight": "bold",
  "titleFontColor": "#000000",
  "scrollBarOpacity": 0.5,
  "headerBorderColor": "#000000",
  "shadowVerticalLength": 0,
  "title": "Microwave",
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "shadowHorizontalLength": 3,
  "shadowOpacity": 0.5,
  "bodyBorderSize": 0,
  "closeButtonIconColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowBlurRadius": 6,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [],
  "closeButtonPaddingBottom": 10,
  "headerPaddingRight": 10,
  "shadowSpread": 1,
  "bodyPaddingRight": 10,
  "shadowColor": "#000000",
  "borderRadius": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "backgroundColorRatios": [],
  "headerBackgroundOpacity": 1,
  "verticalAlign": "middle",
  "bodyBackgroundColor": [
   "#CCCCCC"
  ],
  "closeButtonRollOverBackgroundOpacity": 1,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 10,
  "children": [
   {
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "50%",
    "class": "HTMLText",
    "minWidth": 0,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "minHeight": 0,
    "shadow": false,
    "paddingRight": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Alef';\">Microwaves are a form of electromagnetic radiation with wavelengths ranging from about 1 millimeter to 1 meter, falling between radio waves and infrared radiation on the electromagnetic spectrum. They are commonly used in various applications, including communication technologies, weather forecasting, and cooking. In microwave ovens, microwaves specifically target water, fat, and sugar molecules in food, causing them to vibrate and generate heat through a process known as dielectric heating. This allows food to be cooked quickly and efficiently, as the heat is produced directly within the food rather than from an external source.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;font-family:'Alef';\">The invention of the microwave oven is credited to American engineer Percy Spencer, who developed the first commercial model in 1947, utilizing technology from radar systems developed during World War II. Microwave ovens have since become a staple in kitchens worldwide, known for their convenience in reheating and cooking a variety of foods. While they are effective for many cooking tasks, microwave ovens do not brown or crisp food in the same way that conventional ovens do, as they typically do not reach the high temperatures necessary for such reactions.</SPAN></SPAN></DIV></div>",
    "scrollBarColor": "#000000",
    "id": "htmlText_uidC18C7ADB_ECC1_63C9_41E4_CBF9A9EAE711",
    "data": {
     "name": "HTMLText17204"
    },
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 10,
    "paddingLeft": 10
   },
   {
    "backgroundColor": [],
    "borderSize": 0,
    "width": "50%",
    "class": "WebFrame",
    "backgroundOpacity": 1,
    "url": "https://sketchfab.com/models/2f1ed69cdc0c482b9627aadd21494117/embed",
    "paddingTop": 0,
    "minWidth": 0,
    "height": "100%",
    "minHeight": 0,
    "shadow": false,
    "paddingRight": 0,
    "scrollEnabled": false,
    "data": {
     "name": "WebFrame11254"
    },
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundColorRatios": [],
    "insetBorder": false
   }
  ],
  "footerBorderColor": "#000000",
  "closeButtonIconHeight": 20,
  "closeButtonPressedIconLineWidth": 1,
  "titlePaddingLeft": 5,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBorderSize": 0,
  "borderSize": 0,
  "width": 1200,
  "veilColorDirection": "horizontal",
  "height": 600,
  "headerPaddingTop": 10,
  "layout": "horizontal",
  "gap": 10,
  "closeButtonBorderRadius": 20,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "veilOpacity": 0.4,
  "horizontalAlign": "center",
  "headerBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPaddingLeft": 10,
  "titleFontFamily": "Arial",
  "closeButtonPressedBorderColor": "#000000",
  "minHeight": 20,
  "paddingRight": 0,
  "contentOpaque": false,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#CCCCCC"
  ],
  "titleFontStyle": "normal",
  "bodyPaddingTop": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonPressedBackgroundOpacity": 1,
  "scrollBarColor": "#000000",
  "data": {
   "name": "Window4940"
  },
  "id": "window_D17E7E73_DE1A_39BD_41D9_B9C0FB7A6DAD",
  "closeButtonPressedIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0
  ],
  "footerBackgroundColorDirection": "vertical",
  "footerBackgroundColor": [
   "#CCCCCC"
  ],
  "headerPaddingLeft": 10,
  "titlePaddingRight": 5,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "closeButtonBackgroundOpacity": 1,
  "scrollBarWidth": 10,
  "creationPolicy": "delayed",
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 10
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "linear",
  "id": "effect_C581E057_E656_B788_41BF_D9F9187D446D"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C12B9B16_ECC1_625B_41A2_CE1E15D4A3E6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -91.96,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C13DFB1F_ECC1_6249_41EC_DAB07B857ECD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C1078B28_ECC1_6277_41BE_4B1A60A3AC0F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 54.59,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C1098B32_ECC1_625B_41E6_8E8B965AFE89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -86.38,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C1134B3B_ECC1_6249_41DA_FAFD66CB1556",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.15,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2E6BB43_ECC1_6239_41B2_F4A1D04E6E14",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -163.03,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2F53B4C_ECC1_62CF_41C3_DF478DB22587",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 91.34,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2F8BB55_ECC1_62D9_41E0_20B2F80076E8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 2.49,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2CF3B5E_ECC1_62CB_41E8_480C6F6D55D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 13.99,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2DD2B66_ECC1_62FB_41E9_C6FB6BA54F7F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 153.28,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2A32B6F_ECC1_62C9_41C2_65EC9CCB9ABA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 61.12,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2B10B78_ECC1_62D7_41D5_8C19284B981A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -7.82,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2876B81_ECC1_6239_41AA_8AC7A30915D6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -70.87,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C295BB89_ECC1_6249_41BB_6FBC1AE15FB5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 52.43,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C29B4B92_ECC1_625B_41CA_16FC5C1C824E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2694B9B_ECC1_6249_41D8_CF92EC1E4DBC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C27F7BA4_ECC1_627F_41C6_17A9D0FCAEAF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -89.64,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C24D8BAD_ECC1_6249_41DC_74E23DB7A866",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.73,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2539BB6_ECC1_625B_41ED_8832018819D7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -2.72,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2272BBE_ECC1_624B_41E5_F199EAA48E45",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -112.99,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C234FBC7_ECC1_6239_41D6_A2B81DEABB06",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.22,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C23ACBD0_ECC1_61D7_41D7_5E8CDC0D8AFD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.69,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C2088BD9_ECC1_61C9_41EB_F94AC12CF14C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 53.49,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C21EEBE1_ECC1_61F9_41ED_595DD56681C1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -81.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6EF9C3B_ECC1_6648_41DE_2401AC98748D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 151.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6E8AC46_ECC1_663B_41ED_8F364021AC82",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 19.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6F5EC4F_ECC1_66C9_41EA_9F9827D46ACB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -55.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6F6BC58_ECC1_66D7_41E2_6FAA33F7154C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -28.54,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6F29C61_ECC1_66F9_41EC_694C96988594",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -18.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6FE7C6A_ECC1_66CB_41D4_D68E76A4D711",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 168.89,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6C59C73_ECC1_66D9_41DB_1E397ED21524",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 94.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6C07C7C_ECC1_66CF_41D6_1E0014666ECB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -166.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6CEFC85_ECC1_6639_41E3_CC3E9838FD42",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 93.69,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6CAAC8D_ECC1_6649_41E5_24232D79C21E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.15,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6D0AC96_ECC1_665B_41EB_6800B3F2816E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.52,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6DE8C9F_ECC1_6649_41E4_1240C8AF4C5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 123.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6A49CA8_ECC1_6677_41D3_0F94554CDD7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 99.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6A2FCB1_ECC1_6659_41A3_7A2BB5BBEA54",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6A89CBA_ECC1_664B_417E_84A523E7CB86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.69,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6B64CC3_ECC1_6639_41E0_451847F8E5A6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0.43,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6BCACCC_ECC1_67CF_41E0_1EF5B960AC42",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6841CD5_ECC1_67D9_41D3_E81574C1A912",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.34,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C68E8CDF_ECC1_67C9_41E9_DAB0C8043CAD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 125.96,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6912CEA_ECC1_67CB_41EB_B1DAD6DD285C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.38,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C69B1CFA_ECC1_67CB_41EC_CEDB9F0FE8E0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -154.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C662DD03_ECC1_6639_41E8_8B87FBB2D2FB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -85.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C674CD0C_ECC1_664F_41EC_9C3294F6D6F4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -119.12,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C67F7D15_ECC1_6659_41D0_4A873E9DC725",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.68,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C640CD1E_ECC1_664B_41B6_9662D42B62DE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 92.87,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C64AAD26_ECC1_667B_41C5_C84D32F95171",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -38.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C65FCD2F_ECC1_6649_41C2_6C13ADD3B1B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -61.5,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C6219D38_ECC1_6657_41EB_A38ECD6029D5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.37,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C62ADD40_ECC1_6637_41E5_7A4E98661407",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -10.9,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C63CAD49_ECC1_66C9_41C5_BE4B54439BB7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -33.74,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C601ED52_ECC1_66DB_41DA_41BAFC81FC23",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 108.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C60AFD5D_ECC1_66C9_41C0_02C7376A31AA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.78,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C61E1D66_ECC1_66FB_41ED_9B1F0F31D2B5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.71,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7E36D6F_ECC1_66C9_41E3_DDA3B419C34D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 178.41,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7F6DD78_ECC1_66D7_41C6_84816D309445",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7FA8D80_ECC1_6637_41E2_8CE6740BF542",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -65.42,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7CE4D89_ECC1_6649_41B8_42DC97252AC8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -87.62,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7D23D92_ECC1_665B_41C5_1D32EDE16119",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.37,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7A18D9A_ECC1_664B_41E8_B524BF0A979F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 161.59,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7B57DA4_ECC1_667F_41D6_A22F5E814DA8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 172.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7B92DAD_ECC1_6649_41D6_7CF3DD02720C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -126.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C78C8DB6_ECC1_665B_41E5_52E519A84238",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -159.98,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C793BDBF_ECC1_6649_41EC_53A70CFD6CC8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.35,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7663DC8_ECC1_6637_41B8_5F9A63A34D9D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -90.56,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C774CDD0_ECC1_61D7_41CA_C48E99DF8D1E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7793DD9_ECC1_61C9_41EC_4ABA6AFA4D01",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.14,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C74F8DE2_ECC1_61FB_41D0_FC1F28ACE647",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -178.52,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7523DEB_ECC1_61C9_41DD_733B264801F9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 135.19,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C720DDF4_ECC1_61DF_41E6_5A1996E897FA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -3.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C7376DFD_ECC1_61C9_41A8_6B9C233954C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.16,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C73A1E06_ECC1_623B_41C9_9AFB7C1E2B7C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.56,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C708DE0F_ECC1_6249_41C9_1425776F597E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -127.57,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C71FBE18_ECC1_6257_41E3_676074A66542",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 17.06,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0E22E21_ECC1_6279_41EA_F7E03EC791D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -1.88,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0F0DE29_ECC1_6249_418E_A24D8F5E6995",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 88.94,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0C74E32_ECC1_625B_41E7_E443C761B4AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -179.96,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0CA2E3B_ECC1_6249_41E8_0FF1929386BA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0DE5E44_ECC1_623F_41E3_FAC31264C620",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0ACDE4D_ECC1_62C9_4186_2312D07F21B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -0.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_C0B38E57_ECC1_62D9_41D4_230961231B6C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 179.43,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15"
 },
 "this.effect_DE194568_C7EC_F8CB_4174_5B0CF27EBB15",
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0B24E57_ECC1_62D9_41E7_82CA6DBCCC35"
 },
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_DE18856A_C7EC_F8CF_41E3_C71294520D66"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0B26E58_ECC1_62D7_41E5_3578F3615FCB"
 },
 "this.effect_DE18856A_C7EC_F8CF_41E3_C71294520D66",
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0B21E58_ECC1_62D7_41CA_1270D3FAA81B"
 },
 "this.effect_FB353BE3_EB09_A4F8_41CA_556FF1A38C6D",
 {
  "class": "FadeOutEffect",
  "duration": 0,
  "easing": "cubic_in_out",
  "id": "effect_DE18156A_C7EC_F8CF_41E7_F42143496994"
 },
 {
  "class": "FadeInEffect",
  "duration": 0,
  "easing": "cubic_in_out",
  "id": "effect_C0BD5E58_ECC1_62D7_41D8_A25854ACDDF4"
 },
 "this.effect_DE18156A_C7EC_F8CF_41E7_F42143496994",
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB"
 },
 "this.effect_DE17B56A_C7EC_F8CF_41DF_51B4C1C30DBB",
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0BD1E58_ECC1_62D7_41E1_7CF7AA38BAC1"
 },
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_DBF34FCE_E659_A898_41DB_13300EF76608"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0BFCE59_ECC1_62C9_41AA_6BF3E58B5618"
 },
 "this.effect_DBF34FCE_E659_A898_41DB_13300EF76608",
 {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A"
 },
 "this.effect_DBF3DFCF_E659_A898_41E1_4E051EA59E4A",
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out",
  "id": "effect_C0BF8E59_ECC1_62C9_41DC_0D655B24A2D8"
 }
], "children": [
 {
  "progressBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0,
   0.42,
   0.99
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "progressOpacity": 1,
  "toolTipPaddingBottom": 4,
  "toolTipFontFamily": "Arial",
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "progressBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipBorderColor": "#767676",
  "playbackBarOpacity": 1,
  "transitionDuration": 500,
  "progressHeight": 8,
  "shadow": false,
  "playbackBarRight": 0,
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "toolTipDisplayTime": 600,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "horizontal",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "borderSize": 0,
  "width": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 0,
  "height": "100%",
  "progressBarBackgroundColor": [
   "#003366",
   "#009966",
   "#006600"
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#000000"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColorDirection": "horizontal",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "id": "MainViewer",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBackgroundOpacity": 1
 },
 {
  "verticalAlign": "bottom",
  "mode": "toggle",
  "borderSize": 0,
  "width": 80,
  "maxHeight": 512,
  "class": "IconButton",
  "height": 80,
  "paddingTop": 0,
  "horizontalAlign": "right",
  "minWidth": 1,
  "maxWidth": 512,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "iconURL": "skin/IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D.png",
  "id": "IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D",
  "data": {
   "name": "fullscreen"
  },
  "cursor": "hand",
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D_pressed.png",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "3%",
  "right": "3%",
  "transparencyActive": false
 },
 {
  "verticalAlign": "bottom",
  "mode": "push",
  "borderSize": 0,
  "width": 80,
  "maxHeight": 512,
  "class": "IconButton",
  "height": 80,
  "paddingTop": 0,
  "horizontalAlign": "right",
  "minWidth": 1,
  "maxWidth": 512,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "iconURL": "skin/IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969.png",
  "id": "IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969",
  "data": {
   "name": "vr"
  },
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "3%",
  "right": "12%",
  "transparencyActive": false
 },
 {
  "verticalAlign": "bottom",
  "mode": "push",
  "borderSize": 0,
  "width": 80,
  "maxHeight": 512,
  "class": "IconButton",
  "height": 80,
  "paddingTop": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "maxWidth": 512,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "click": "this.mainPlayList.set('selectedIndex', 3)",
  "iconURL": "skin/IconButton_D38C402B_C795_B84D_4192_5A87127999DE.png",
  "id": "IconButton_D38C402B_C795_B84D_4192_5A87127999DE",
  "data": {
   "name": "walkthrough"
  },
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "3%",
  "right": "47.5%",
  "transparencyActive": false
 },
 {
  "verticalAlign": "bottom",
  "mode": "push",
  "borderSize": 0,
  "width": 80,
  "maxHeight": 512,
  "class": "IconButton",
  "height": 80,
  "paddingTop": 0,
  "horizontalAlign": "center",
  "minWidth": 1,
  "maxWidth": 512,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "visible": false,
  "iconURL": "skin/IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD.png",
  "id": "IconButton_D10F9B40_C7EC_483B_41CA_2E31902535BD",
  "data": {
   "name": "drone_view"
  },
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "3%",
  "right": "47.5%",
  "transparencyActive": false
 },
 {
  "progressBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0,
   0.42,
   0.99
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "class": "ViewerArea",
  "progressOpacity": 1,
  "toolTipPaddingBottom": 4,
  "toolTipFontFamily": "Arial",
  "minWidth": 1,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "toolTipFontStyle": "normal",
  "progressBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "paddingTop": 0,
  "playbackBarOpacity": 1,
  "transitionDuration": 500,
  "progressHeight": 8,
  "shadow": false,
  "playbackBarRight": 0,
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 2,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "toolTipDisplayTime": 600,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "horizontal",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 0,
  "borderSize": 0,
  "width": "28%",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 0,
  "height": "40%",
  "progressBarBackgroundColor": [
   "#003366",
   "#009966",
   "#006600"
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#000000"
  ],
  "minHeight": 1,
  "progressBarOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColorDirection": "horizontal",
  "top": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "visible": false,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "id": "MapViewer",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "right": "0%"
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "class": "Container",
  "gap": 10,
  "backgroundOpacity": 0.4,
  "layout": "absolute",
  "paddingTop": 0,
  "horizontalAlign": "left",
  "minWidth": 1,
  "height": "100%",
  "minHeight": 1,
  "shadow": false,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "visible": false,
  "contentOpaque": false,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "id": "Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E",
  "data": {
   "name": "Main_container"
  },
  "bottom": "0%",
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "creationPolicy": "delayed",
  "left": "0%",
  "borderRadius": 0,
  "children": [
   {
    "borderRadius": 0,
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "layout": "absolute",
    "class": "Container",
    "gap": 10,
    "backgroundOpacity": 1,
    "minWidth": 1,
    "paddingTop": 0,
    "minHeight": 1,
    "horizontalAlign": "left",
    "shadow": false,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "top": "15%",
    "visible": false,
    "contentOpaque": false,
    "overflow": "visible",
    "scrollBarColor": "#000000",
    "id": "Container_FD55E9E2_E649_6889_41DC_98E04686D8C4",
    "data": {
     "name": "Guitar_container"
    },
    "bottom": "15%",
    "scrollBarWidth": 10,
    "backgroundColorDirection": "vertical",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0
    ],
    "creationPolicy": "delayed",
    "left": "15%",
    "right": "15%",
    "children": [
     {
      "backgroundColor": [
       "#FFFFFF"
      ],
      "borderSize": 0,
      "width": "100%",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "url": "https://sketchfab.com/models/4eeb8f55c0de4521af948a343094baa4/embed",
      "paddingTop": 0,
      "minWidth": 1,
      "height": "100%",
      "minHeight": 1,
      "shadow": false,
      "paddingRight": 0,
      "top": "0%",
      "scrollEnabled": false,
      "id": "WebFrame_FF12CD68_E64F_A998_41CE_2DB02DF53528",
      "data": {
       "name": "guitar_content"
      },
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "left": "0%",
      "insetBorder": false
     },
     {
      "verticalAlign": "middle",
      "mode": "push",
      "borderSize": 0,
      "width": 49.8,
      "maxHeight": 256,
      "class": "IconButton",
      "height": 49.8,
      "horizontalAlign": "center",
      "minWidth": 1,
      "paddingTop": 0,
      "maxWidth": 256,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "shadow": false,
      "paddingRight": 0,
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_FD55E9E2_E649_6889_41DC_98E04686D8C4, false, 0, null, null, false); this.setComponentVisibility(this.Container_F3B56881_E64B_6888_41D9_6BDBF81DB19E, false, 0, this.effect_F8A13593_E649_D888_4181_C6B58340B31E, 'hideEffect', false)",
      "iconURL": "skin/IconButton_FD0A5FDB_E64B_A8BF_41E0_6356ECCD2AE0.png",
      "id": "IconButton_FD0A5FDB_E64B_A8BF_41E0_6356ECCD2AE0",
      "data": {
       "name": "close_icon"
      },
      "cursor": "hand",
      "borderRadius": 0,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "transparencyActive": false,
      "right": "0%"
     }
    ]
   }
  ]
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_D44FC6A3_C79C_B87D_41BB_091C2F3EB969], 'gyroscopeAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_C169AAEF_ECC1_63C9_41EA_2BFE6FE93905.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "mobileMipmappingEnabled": true,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } }
 },
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_D4C63B6B_C794_48CD_41D4_EE04F1B3093D",
 "borderSize": 0,
 "width": "100%",
 "class": "Player",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": true,
 "minWidth": 20,
 "height": "100%",
 "shadow": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "vrPolyfillScale": 0.65,
 "data": {
  "name": "Player449"
 },
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "creationPolicy": "delayed",
 "mouseWheelEnabled": true
})