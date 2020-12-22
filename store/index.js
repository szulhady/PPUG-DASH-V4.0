export const state = () => ({
    logoImg:"ppug-logo.png",
    logoDesc:'PPUG',
    arrayTime:[[],[],[],[]],
    time:"",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    durationTimeArray:[null,null,null,null],
    duration: "Waiting for incoming data",
    durationServer: "Waiting for incoming data",
    durationKolam1:"Waiting for incoming data",
    durationKolam2:"Waiting for incoming data",
    durationKolam3:"Waiting for incoming data",
    durationKolam4:"Waiting for incoming data",
    server:{
      disc:0,
      temperature:0,
      speed:0
    },
    items: [
      {
        title: "Station A",
        subtitle: "Kolam 1",
        image: "image1.jpg",
        cols: 6,
        DO: 0,
        TEMP:0,
        PH: 0,
        DD: 0,
        NH3: 0,
        warning:[],
        isDOHigh:false,
        isTEMPHigh:false,
        isPHHigh:false,
        isDDHigh:false,
        isNH3High:false,
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
      },
      {
        title: "Station B",
        subtitle: "Kolam 2",
        image: "image2.jpg",
        cols: 6,
        DO: 0,
        TEMP:0,
        PH: 0,
        DD: 0,
        NH3: 0,
        warning:[],
        isDOHigh:false,
        isTEMPHigh:false,
        isPHHigh:false,
        isDDHigh:false,
        isNH3High:false,
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
      },
      {
        title: "Station C",
        subtitle: "Kolam 3",
        image: "image3.jpg",
        cols: 6,
        DO: 0,
        TEMP:0,
        PH: 0,
        DD: 0,
        NH3: 0,
        warning:[],
        isDOHigh:false,
        isTEMPHigh:false,
        isPHHigh:false,
        isDDHigh:false,
        isNH3High:false,
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
      },
      {
        title: "Station D",
        subtitle: "Kolam 4",
        image: "image4.jpg",
        cols: 6,
        DO: 0,
        TEMP:0,
        PH: 0,
        DD: 0,
        NH3: 0,
        warning:[],
        isDOHigh:false,
        isTEMPHigh:false,
        isPHHigh:false,
        isDDHigh:false,
        isNH3High:false,
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
      },
    ],
    cards:[
      {
      description: "Stations",
      icon: "mdi mdi-map-marker-radius icon",
      number: "4",
      cols: 4,
      class: "primary",
      data:4}
      ,
      {
      description: "Online",
      icon: "mdi mdi-checkbox-multiple-marked icon",
      number: "4",
      cols: 4,
      class: "success",
      data:4
      },
      {
      description: "Warnings",
      icon: "mdi mdi-alert-rhombus-outline icon",
      number: 0,
      cols: 4,
      class: "error",
      data:0
      }
    ],
    status: [
      
      {
        name: "Station A",
  
        remarks: "",
      },
      {
        name: "Station B",
  
        remarks: ``,
      },
      {
        name: "Station C",
  
        remarks: "",
      },
      {
        name: "Station D",
  
        remarks: "",
      },
    ],
    trends:
      [
        {
        name:"Station One",
        current:[[],[],[],[],[]],
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
      ],
        weekly:[
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
        monthly:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
        ]
      },
      {
        name:"Station Two",
        current:[[],[],[],[],[]],
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
        monthly:
        [
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
        ]
      },
      {
        name:"Station Three",
        current:[[],[],[],[],[]],
        daily:[
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            hour:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            hour:[]
          }
        ],
        weekly:
        [
          {
          name:"DO",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"TEMP",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"PH",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"DD",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
        ],
        monthly:
        [
          {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            monthName:[]
          },
          ]
        },
        {
          name:"Station Four",
          current:[[],[],[],[],[]],
          daily:[
            {
              name:"DO",
              max:[],
              min:[],
              avg:[],
              hour:[]
            },
            {
              name:"TEMP",
              max:[],
              min:[],
              avg:[],
              hour:[]
            },
            {
              name:"PH",
              max:[],
              min:[],
              avg:[],
              hour:[]
            },
            {
              name:"DD",
              max:[],
              min:[],
              avg:[],
              hour:[]
            },
            {
              name:"NH3",
              max:[],
              min:[],
              avg:[],
              hour:[]
            }
          ],
          weekly:
          [
            {
            name:"DO",
            max:[],
            min:[],
            avg:[],
            day:[]
          },
          {
            name:"TEMP",
            max:[],
            min:[],
            avg:[],
            day:[]
          },
          {
            name:"PH",
            max:[],
            min:[],
            avg:[],
            day:[]
          },
          {
            name:"DD",
            max:[],
            min:[],
            avg:[],
            day:[]
          },
          {
            name:"NH3",
            max:[],
            min:[],
            avg:[],
            day:[]
          }
          ],
          monthly:
          [
            {
              name:"DO",
              max:[],
              min:[],
              avg:[],
              monthName:[]
            },
            {
              name:"TEMP",
              max:[],
              min:[],
              avg:[],
              monthName:[]
            },
            {
              name:"PH",
              max:[],
              min:[],
              avg:[],
              monthName:[]
            },
            {
              name:"DD",
              max:[],
              min:[],
              avg:[],
              monthName:[]
            },
            {
              name:"NH3",
              max:[],
              min:[],
              avg:[],
              monthName:[]
            },
          ]
        }
      ]
  });

  
  export const mutations = {
  
    generateRandomData(state) {
      for (let i = 0; i <= 3; i++) {
        let newDO = (Math.random() * 20).toFixed(1);
        let newTEMP=(Math.random() * 40).toFixed(1);
        let newPH = (Math.random() * 14).toFixed(1);
        let newDD = (Math.random() * 1000).toFixed(0);
        let newNH3 = (Math.random() * 1000).toFixed(0);
        state.items[i].DO = newDO;
        state.items[i].TEMPT=newTEMP;
        state.items[i].PH = newPH;
        state.items[i].DD = newDD;
        state.items[i].NH3 = newNH3;
      }
    },

    checkWarning(state,payload){
      const items=JSON.parse(payload)
      const maxDO=5;
      const maxTEMP=30;
      const maxPH=8.5;
      const maxDD=15;
      const maxNH3=0.3;

      // const maxDO=0;
      // const maxTEMP=0;
      // const maxPH=0;
      // const maxDD=0;
      // const maxNH3=0;

      state.items[items.id-1].warning=[]
      state.status[items.id-1].remarks=[]
      state.items[items.id-1].isDOHigh=false
      state.items[items.id-1].isTEMPHigh=false
      state.items[items.id-1].isPHHigh=false
      state.items[items.id-1].isDDHigh=false
      state.items[items.id-1].isNH3High=false

      if(state.items[items.id-1].DO >=maxDO){
        state.items[items.id-1].warning.push(" Dissolved oxygen reading is high")
        state.items[items.id-1].isDOHigh=true
      }
      if(state.items[items.id-1].TEMP >maxTEMP){
        state.items[items.id-1].warning.push(" Temperature reading is high")
        state.items[items.id-1].isTEMPHigh=true
      }
      if( state.items[items.id-1].PH>maxPH){
        state.items[items.id-1].warning.push(' pH reading is high')
        state.items[items.id-1].isPHHigh=true
      }
      if(state.items[items.id-1].DD>=maxDD){
        state.items[items.id-1].warning.push(' Salinity reading is high')
        state.items[items.id-1].isDDHigh=true
      }
      if(state.items[items.id-1].NH3>=maxNH3){
        state.items[items.id-1].warning.push(' Ammonia reading is high')
        state.items[items.id-1].isNH3High=true
      }

      if(state.items[items.id-1].warning.length>0){
        state.status[items.id-1].remarks=state.items[items.id-1].warning.toString()
      }else{
        state.status[items.id-1].remarks=["Good"]
      }   
    },

    countWarning(state){
      let number=0;
      for (let i = 0; i <= 3; i++) {
     number=number + state.items[i].warning.length
      }
      state.cards[2].data=number
    },
  
    getMQTTData(state,payload){
      state.items=JSON.parse(payload)
    },

    getMQTTDataEach(state,payload){
      const items=JSON.parse(payload)
      state.items[items.id-1].DO=items.DO;
      state.items[items.id-1].TEMP=items.Temp;
      state.items[items.id-1].PH=items.pH;
      state.items[items.id-1].DD=items.DD;
      state.items[items.id-1].NH3=items.NH4;
    },

    getServerHealth(state, payload){
      let data = JSON.parse(payload)
      if(data.Temp){
      state.server.disc = data.Disc;
      
      state.server.temperature = (data.Temp).slice(1,-3);
      // console.log(state.server.temperature)
      state.server.speed = data.Speed
    }
    },

    getDurationServer(state,payload){
      let duration=payload;
      // console.log(payload)
      if (duration==0){
        duration="just now"
      }else if(duration==1){
        duration=`${duration} minute ago`
      }
      else 
      {
        duration=`${duration} minutes ago`
      }
      state.durationServer=`Updated ${duration}`
      // console.log(duration)
      // state.time=new Date()
    },

    getDuration(state,payload){
      let duration=payload;
      if (duration==0){
        duration="just now"
      }else if(duration==1){
        duration=`${duration} minute ago`
      }
      else 
      {
        duration=`${duration} minutes ago`
      }
      state.duration=`Updated ${duration}`
      // console.log(duration)
      // state.time=new Date()
    },

    //KOLAM 1
    getDuration1(state,payload){
      let duration1=payload;
      // console.log(duration1)
      if (duration1==0){
        duration1="just now"
      }else if(duration1==1){
        duration1=`${duration1} minute ago`
      }
      else 
      {
        duration1=`${duration1} minutes ago`
      }
      state.durationKolam1=`Updated ${duration1}`
      state.time1=new Date()
    },

    //KOLAM 2
    getDuration2(state,payload){
      let duration2=payload;
      if (duration2==0){
        duration2="just now"
      }else if(duration2==1){
        duration2=`${duration2} minute ago`
      }
      else 
      {
        duration2=`${duration2} minutes ago`
      }
      state.durationKolam2=`Updated ${duration2}`
      state.time2=new Date()
    },

    //KOLAM 3
    getDuration3(state,payload){
      let duration3=payload;
      if (duration3==0){
        duration3="just now"
      }else if(duration3==1){
        duration3=`${duration3} minute ago`
      }
      else 
      {
        duration3=`${duration3} minutes ago`
      }
      state.durationKolam3=`Updated ${duration3}`
      state.time3=new Date()
    },

    //KOLAM 4
    getDuration4(state,payload){
      let duration4=payload;
      if (duration4==0){
        duration4="just now"
      }else if(duration4==1){
        duration4=`${duration4} minute ago`
      }
      else 
      {
        duration4=`${duration4} minutes ago`
      }
      state.durationKolam4=`Updated ${duration4}`
      state.time4=new Date()
    },

    //Insert data into array for current trend
    getCurrentDataArray(state,payload,){
      let sensor=payload.sensor;
      let indexStation=payload.indexStation;
      let indexSensor=payload.indexSensor;

      if(state.trends[indexStation].current[indexSensor].length<10){
        if( sensor=='do_val'){
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].DO)
        }
        if( sensor=='tmp_val'){
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].TEMP)
        }
        if( sensor=='ph_val'){
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].PH)
        }
        if( sensor=='dd_val'){
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].DD)
        }
        if( sensor=='dg_val'){
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].NH3)
        }
      }else{
        if( sensor=='do_val'){
        state.trends[indexStation].current[indexSensor].splice(0, 1);
        state.trends[indexStation].current[indexSensor].push(state.items[indexStation].DO)
        }
        if( sensor=='tmp_val'){
          state.trends[indexStation].current[indexSensor].splice(0, 1);
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].TEMP)
        }
        if( sensor=='ph_val'){
          state.trends[indexStation].current[indexSensor].splice(0, 1);
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].PH)
        }
        if( sensor=='dd_val'){
          state.trends[indexStation].current[indexSensor].splice(0, 1);
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].DD)
        }
        if( sensor=='dg_val'){
          state.trends[indexStation].current[indexSensor].splice(0, 1);
          state.trends[indexStation].current[indexSensor].push(state.items[indexStation].NH3)
        }
      }
    },

    //Insert array time for current trend
    getCurrentTimeArray(state,payload){
      if (state.arrayTime[payload.index].length < 10) {
        state.arrayTime[payload.index].push(payload.realTime);
      } else {
        state.arrayTime[payload.index].splice(0, 1);
        state.arrayTime[payload.index].push(payload.realTime);
      }
    },

    // Daily
    getDaily(state,payload){
      let indexStation=payload.indexStation;
      let indexSensor=payload.indexSensor;
      let data=payload;
      state.trends[indexStation].daily[indexSensor].min=data.min;
      state.trends[indexStation].daily[indexSensor].max=data.max;
      state.trends[indexStation].daily[indexSensor].avg=data.avg;
      state.trends[indexStation].daily[indexSensor].hour=data.hour
    },

    // Weekly
    getWeekly(state,payload){
      let indexStation=payload.indexStation;
      let indexSensor=payload.indexSensor;
      let data=payload;
      state.trends[indexStation].weekly[indexSensor].min=data.min;
      state.trends[indexStation].weekly[indexSensor].max=data.max;
      state.trends[indexStation].weekly[indexSensor].avg=data.avg;
      state.trends[indexStation].weekly[indexSensor].day=data.day
    },

    // Monthly
    getMonthly(state,payload){
      let indexStation=payload.indexStation;
      let indexSensor=payload.indexSensor;
      let data=payload;
      state.trends[indexStation].monthly[indexSensor].min=data.min;
      state.trends[indexStation].monthly[indexSensor].max=data.max;
      state.trends[indexStation].monthly[indexSensor].avg=data.avg;
      state.trends[indexStation].monthly[indexSensor].monthName=data.monthName;
    },
  };
  