import AppleHealthKit from '@gedankenstuecke/rn-apple-healthkit';

const PERMS = AppleHealthKit.Constants.Permissions;
const healtKitInitOptions = {
  permissions: {
    read: [PERMS.Bloodglucose, PERMS.Insulindelivery],
  },
};

const initHealthKit = () => {
  return new Promise((resolve, reject) => {
    AppleHealthKit.initHealthKit(healtKitInitOptions, (err, results) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

const getBloodglucose = () => {
  let options = {
    unit: 'mg/dl', // optional; default 'mg/dl'
    startDate: new Date(2015, 4, 1).toISOString(), // required
    endDate: new Date().toISOString(), // optional; default now
    ascending: false, // optional; default false
    // limit: 10, // optional; default no limit
  };
  return new Promise((resolve, reject) => {
    AppleHealthKit.getBloodglucose(options, (err, results) => {
      if (err) {
        reject(err);
      }
      const hd = results.map(result => {
        const {value, startDate} = result;
        return {
          value,
          startDate,
        };
      });

      resolve(hd);
    });
  });
};


const getInsulindelivery = () => {
  let options = {
    unit: 'IE', // optional; default 'IE'
    startDate: new Date(2015, 4, 1).toISOString(), // required
    endDate: new Date().toISOString(), // optional; default now
    ascending: false, // optional; default false
    // limit: 10, // optional; default no limit
  };
  return new Promise((resolve, reject) => {
    AppleHealthKit.getInsulindelivery(options, (err, results) => {
      if (err) {
        reject(err);
      }
      const hd = results.map(result => {
        const {value, startDate} = result;
        return {
          value,
          startDate,
        };
      });

      resolve(hd);
    });
  });
};

export {initHealthKit, getBloodglucose, getInsulindelivery};
