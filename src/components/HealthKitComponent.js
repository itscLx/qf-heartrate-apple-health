import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {
  InitHealthKit,
  GetBloodGlucose,
  resetHealthKitUploader,
} from '../redux/actions/HealthKitActions';
import {I18N} from '../common/config';

const HealthKitComponent = ({
  initialized,
  uploaded,
  InitHealthKit,
  GetBloodGlucose,
  access_token,
  resetHealthKitUploaderAction,
  loading,
}) => {
  useEffect(() => {
    if (!initialized) {
      InitHealthKit();
    }
  }, [initialized]);

  return (
    <>
      {loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator large />
        </View>
      )}
      {!loading && uploaded && (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 48, textAlign: 'center'}}>
            {I18N.UPLOAD_SUCCESS}
          </Text>
          <TouchableOpacity
            onPress={resetHealthKitUploaderAction}
            style={{
              borderRadius: 15,
              margin: 5,
              backgroundColor: '#3BB155',
              padding: 10,
            }}>
            <Text style={{fontSize: 14, color: '#fff'}}>
              {I18N.UPLOAD_ANOTHER}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {!loading && initialized && !uploaded && (
        <TouchableOpacity
          onPress={() => {
            GetBloodGlucose(access_token);
          }}
          style={{
            height: 296,
            width: 296,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 148,
            backgroundColor: '#212D58',
          }}>
          <Text style={{color: '#FFF', fontSize: 48, textAlign: 'center'}}>
            {I18N.UPLOAD_DATA}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const {initialized, bloodglucoseSampels, uploaded} = state.HealthKitReducer;
  const {loading} = state.LoaderReducer;
  const {access_token} = state.AuthenticationReducer;
  return {initialized, bloodglucoseSampels, access_token, uploaded, loading};
};

export default connect(
  mapStateToProps,
  {
    InitHealthKit,
    GetBloodGlucose,
    resetHealthKitUploaderAction: resetHealthKitUploader,
  },
)(HealthKitComponent);
