// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    Contribution: ctc0,
    Finished: ctc0,
    Payment: ctc0,
    Registration: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  return {
    PoolPhase: {
      phase: [ctc1]
      },
    Update: {
      info: [ctc2, ctc3]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc4 = stdlib.T_Object({
    contributionAmt: ctc1,
    duration: ctc1,
    maxUsers: ctc1,
    penaltyAmt: ctc1,
    poolDescription: ctc2,
    poolName: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc5
    });
  const map0_ctc = ctc6;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc6;
  
  
  return {
    infos: {
      poolDetails: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v448, v449, v452, v453, v454, v455, v471] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v448, v449, v452, v453, v454, v455, v471] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v448, v449] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v448, v449, v452, v453, v531] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
            const [v448, v449, v452, v453, v548, v584] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
            const [v448, v449, v452, v453, v548] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
            const [v448, v449, v452, v453, v548] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'))) {
            const [v448, v449, v452, v453, v548, v555] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'))) {
            const [v448, v449, v452, v453, v454, v455, v484, v492] = svs;
            return (await ((async () => {
              
              
              return v449;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
      2: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc4],
      7: [ctc0, ctc4, ctc1, ctc1, ctc1],
      9: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc4, ctc1, ctc1, ctc1],
      11: [ctc0, ctc4, ctc1, ctc1, ctc1],
      12: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Any_contribute12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_contribute12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_contribute12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v448, v449, v452, v453, v548, v555] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3]);
  const v559 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
    msg: 'in',
    who: 'Any_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v448, v449, v452, v453, v548, v555, v559],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v452, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v563], secs: v565, time: v564, didSend: v283, from: v562 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_contribute"
        });
      const v568 = stdlib.add(v548, v452);
      sim_r.txns.push({
        amt: v452,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 2, v562, null);
      null;
      const v570 = null;
      const v571 = await txn1.getOutput('Any_contribute', 'v570', ctc0, v570);
      
      const v939 = v568;
      const v943 = stdlib.add(v564, v453);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v563], secs: v565, time: v564, didSend: v283, from: v562 } = txn1;
  undefined /* setApiDetails */;
  const v568 = stdlib.add(v548, v452);
  ;
  await stdlib.mapSet(map2, v562, null);
  null;
  const v570 = null;
  const v571 = await txn1.getOutput('Any_contribute', 'v570', ctc0, v570);
  if (v283) {
    stdlib.protect(ctc0, await interact.out(v563, v571), {
      at: './index.rsh:135:15:application',
      fs: ['at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)', 'at ./index.rsh:140:27:application call to "returnFunc" (defined at: ./index.rsh:137:15:function exp)', 'at ./index.rsh:137:15:application call to [unknown function] (defined at: ./index.rsh:137:15:function exp)'],
      msg: 'out',
      who: 'Any_contribute'
      });
    }
  else {
    }
  
  const v939 = v568;
  const v940 = stdlib.sub(stdlib.UInt_max, v564);
  const v941 = stdlib.sub(v940, v453);
  const v942 = stdlib.ge(v941, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v942, {
    at: 'reach standard library:578:15:application',
    fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:145:19:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
    msg: null,
    who: 'Any_contribute'
    });
  const v943 = stdlib.add(v564, v453);
  return;
  
  
  
  };
export async function _Any_requestPayment11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_requestPayment11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_requestPayment11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v448, v449, v452, v453, v548] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc6, ctc3, ctc3, ctc3]);
  const v598 = ctc.selfAddress();
  const v600 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:173:9:application',
    fs: ['at ./index.rsh:173:9:application call to [unknown function] (defined at: ./index.rsh:173:9:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v602 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v598), null);
  let v603;
  switch (v602[0]) {
    case 'None': {
      const v604 = v602[1];
      v603 = false;
      
      break;
      }
    case 'Some': {
      const v605 = v602[1];
      v603 = true;
      
      break;
      }
    }
  const v606 = v603 ? false : true;
  stdlib.assert(v606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:177:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:9:application call to [unknown function] (defined at: ./index.rsh:176:24:function exp)', 'at ./index.rsh:173:9:application call to [unknown function] (defined at: ./index.rsh:173:9:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v448, v449, v452, v453, v548, v600],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:175:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v609], secs: v611, time: v610, didSend: v372, from: v608 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v616 = stdlib.sub(v548, v548);
      sim_r.txns.push({
        kind: 'from',
        to: v608,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 1, v608, null);
      const v618 = null;
      const v619 = await txn1.getOutput('Any_requestPayment', 'v618', ctc0, v618);
      
      const v965 = v616;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v609], secs: v611, time: v610, didSend: v372, from: v608 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v616 = stdlib.sub(v548, v548);
  ;
  await stdlib.mapSet(map1, v608, null);
  const v618 = null;
  const v619 = await txn1.getOutput('Any_requestPayment', 'v618', ctc0, v618);
  stdlib.protect(ctc0, await interact.out(v609, v619), {
    at: './index.rsh:173:9:application',
    fs: ['at ./index.rsh:173:9:application call to [unknown function] (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:182:26:application call to "returnPayFunc" (defined at: ./index.rsh:173:9:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v965 = v616;
  return;
  
  
  
  };
export async function _Contributor_register13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributor_register13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributor_register13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v448, v449, v452, v453, v454, v455, v484, v492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v495 = ctc.selfAddress();
  const v497 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)'],
    msg: 'in',
    who: 'Contributor_register'
    });
  const v499 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v495), null);
  let v500;
  switch (v499[0]) {
    case 'None': {
      const v501 = v499[1];
      v500 = false;
      
      break;
      }
    case 'Some': {
      const v502 = v499[1];
      v500 = true;
      
      break;
      }
    }
  const v503 = v500 ? false : true;
  stdlib.assert(v503, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:17:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)'],
    msg: null,
    who: 'Contributor_register'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v448, v449, v452, v453, v454, v455, v484, v492, v497],
    evt_cnt: 1,
    funcNum: 13,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v455, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v507], secs: v509, time: v508, didSend: v221, from: v506 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributor_register"
        });
      const v512 = stdlib.add(v492, v455);
      sim_r.txns.push({
        amt: v455,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v506, null);
      null;
      const v514 = null;
      const v515 = await txn1.getOutput('Contributor_register', 'v514', ctc0, v514);
      
      const v520 = stdlib.add(v484, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
      const v972 = v520;
      const v974 = v512;
      const v975 = stdlib.le(v520, v454);
      if (v975) {
        sim_r.isHalt = false;
        }
      else {
        const v1031 = v512;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v507], secs: v509, time: v508, didSend: v221, from: v506 } = txn1;
  undefined /* setApiDetails */;
  const v512 = stdlib.add(v492, v455);
  ;
  await stdlib.mapSet(map0, v506, null);
  null;
  const v514 = null;
  const v515 = await txn1.getOutput('Contributor_register', 'v514', ctc0, v514);
  if (v221) {
    stdlib.protect(ctc0, await interact.out(v507, v515), {
      at: './index.rsh:99:16:application',
      fs: ['at ./index.rsh:99:16:application call to [unknown function] (defined at: ./index.rsh:99:16:function exp)', 'at ./index.rsh:105:25:application call to "callBack" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)'],
      msg: 'out',
      who: 'Contributor_register'
      });
    }
  else {
    }
  
  const v520 = stdlib.add(v484, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
  const v972 = v520;
  const v974 = v512;
  const v975 = stdlib.le(v520, v454);
  if (v975) {
    return;
    }
  else {
    const v1031 = v512;
    return;
    }
  
  
  };
export async function PoolCreator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc5 = stdlib.T_Object({
    contributionAmt: ctc2,
    duration: ctc2,
    maxUsers: ctc2,
    penaltyAmt: ctc2,
    poolDescription: ctc3,
    poolName: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v430 = stdlib.protect(ctc5, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v431 = v430.contributionAmt;
  const v434 = v430.penaltyAmt;
  
  const v441 = stdlib.div(v431, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
  const v443 = stdlib.eq(v434, v441);
  stdlib.assert(v443, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:27:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:64:12:application call to [unknown function] (defined at: ./index.rsh:64:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v446 = stdlib.gt(v431, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v446, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:66:27:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:64:12:application call to [unknown function] (defined at: ./index.rsh:64:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v430],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v449], secs: v451, time: v450, didSend: v70, from: v448 } = txn1;
      
      ;
      const v452 = v449.contributionAmt;
      const v453 = v449.duration;
      const v454 = v449.maxUsers;
      const v455 = v449.penaltyAmt;
      const v471 = stdlib.add(v452, v455);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v449], secs: v451, time: v450, didSend: v70, from: v448 } = txn1;
  ;
  const v452 = v449.contributionAmt;
  const v453 = v449.duration;
  const v454 = v449.maxUsers;
  const v455 = v449.penaltyAmt;
  const v460 = stdlib.div(v452, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
  const v462 = stdlib.eq(v455, v460);
  stdlib.assert(v462, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v465 = stdlib.gt(v452, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v465, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v471 = stdlib.add(v452, v455);
  const txn2 = await (ctc.sendrecv({
    args: [v448, v449, v452, v453, v454, v455, v471],
    evt_cnt: 0,
    funcNum: 1,
    lct: v450,
    onlyIf: true,
    out_tys: [],
    pay: [v471, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v474, time: v473, didSend: v125, from: v472 } = txn2;
      
      sim_r.txns.push({
        amt: v471,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      null;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v474, time: v473, didSend: v125, from: v472 } = txn2;
  ;
  const v477 = stdlib.addressEq(v448, v472);
  stdlib.assert(v477, {
    at: './index.rsh:81:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  null;
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './index.rsh:83:37:application',
    fs: ['at ./index.rsh:83:37:application call to [unknown function] (defined at: ./index.rsh:83:37:function exp)', 'at ./index.rsh:83:37:application call to "liftedInteract" (defined at: ./index.rsh:83:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v448, v449, v452, v453, v454, v455, v471],
    evt_cnt: 0,
    funcNum: 2,
    lct: v473,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v481, time: v480, didSend: v134, from: v479 } = txn3;
      
      ;
      const v483 = ['Registration', null];
      null;
      const v484 = stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0');
      const v485 = v480;
      const v492 = v471;
      
      if (await (async () => {
        const v494 = stdlib.le(v484, v454);
        
        return v494;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v524 = v485;
        const v531 = v492;
        
        if (await (async () => {
          
          return true;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v481, time: v480, didSend: v134, from: v479 } = txn3;
  ;
  const v482 = stdlib.addressEq(v448, v479);
  stdlib.assert(v482, {
    at: './index.rsh:85:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v483 = ['Registration', null];
  null;
  let v484 = stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0');
  let v485 = v480;
  let v492 = v471;
  
  while (await (async () => {
    const v494 = stdlib.le(v484, v454);
    
    return v494;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 13,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v507], secs: v509, time: v508, didSend: v221, from: v506 } = txn4;
    undefined /* setApiDetails */;
    const v512 = stdlib.add(v492, v455);
    ;
    await stdlib.mapSet(map0, v506, null);
    null;
    const v514 = null;
    await txn4.getOutput('Contributor_register', 'v514', ctc0, v514);
    const v520 = stdlib.add(v484, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
    const cv484 = v520;
    const cv485 = v508;
    const cv492 = v512;
    
    v484 = cv484;
    v485 = cv485;
    v492 = cv492;
    
    continue;
    
    }
  let v524 = v485;
  let v531 = v492;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v448, v449, v452, v453, v531],
      evt_cnt: 0,
      funcNum: 6,
      lct: v524,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:123:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v535, time: v534, didSend: v244, from: v533 } = txn4;
        
        ;
        const v537 = ['Contribution', null];
        null;
        const v540 = true;
        const v541 = v534;
        const v548 = v531;
        
        if (await (async () => {
          
          return v540;})()) {
          const v555 = stdlib.add(v541, v453);
          sim_r.isHalt = false;
          }
        else {
          const v584 = stdlib.add(v541, v453);
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v535, time: v534, didSend: v244, from: v533 } = txn4;
    ;
    const v536 = stdlib.addressEq(v448, v533);
    stdlib.assert(v536, {
      at: './index.rsh:123:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v537 = ['Contribution', null];
    null;
    let v540 = true;
    let v541 = v534;
    let v548 = v531;
    
    while (await (async () => {
      
      return v540;})()) {
      const v552 = stdlib.sub(stdlib.UInt_max, v541);
      const v553 = stdlib.sub(v552, v453);
      const v554 = stdlib.ge(v553, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v554, {
        at: 'reach standard library:578:15:application',
        fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:145:19:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
        msg: null,
        who: 'PoolCreator'
        });
      const v555 = stdlib.add(v541, v453);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 11,
        out_tys: [ctc6],
        timeoutAt: ['time', v555],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v448, v449, v452, v453, v548, v555],
          evt_cnt: 0,
          funcNum: 12,
          lct: v541,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:147:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v579, time: v578, didSend: v310, from: v577 } = txn6;
            
            ;
            const cv540 = false;
            const cv541 = v578;
            const cv548 = v548;
            
            await (async () => {
              const v540 = cv540;
              const v541 = cv541;
              const v548 = cv548;
              
              if (await (async () => {
                
                return v540;})()) {
                const v552 = stdlib.sub(stdlib.UInt_max, v541);
                const v553 = stdlib.sub(v552, v453);
                const v554 = stdlib.ge(v553, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
                ;
                const v555 = stdlib.add(v541, v453);
                sim_r.isHalt = false;
                }
              else {
                const v584 = stdlib.add(v541, v453);
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v579, time: v578, didSend: v310, from: v577 } = txn6;
        ;
        const v580 = stdlib.addressEq(v448, v577);
        stdlib.assert(v580, {
          at: './index.rsh:147:16:dot',
          fs: ['at ./index.rsh:145:33:application call to [unknown function] (defined at: ./index.rsh:145:33:function exp)'],
          msg: 'sender correct',
          who: 'PoolCreator'
          });
        const cv540 = false;
        const cv541 = v578;
        const cv548 = v548;
        
        v540 = cv540;
        v541 = cv541;
        v548 = cv548;
        
        continue;
        }
      else {
        const {data: [v563], secs: v565, time: v564, didSend: v283, from: v562 } = txn5;
        undefined /* setApiDetails */;
        const v568 = stdlib.add(v548, v452);
        ;
        await stdlib.mapSet(map2, v562, null);
        null;
        const v570 = null;
        await txn5.getOutput('Any_contribute', 'v570', ctc0, v570);
        const cv540 = true;
        const cv541 = v564;
        const cv548 = v568;
        
        v540 = cv540;
        v541 = cv541;
        v548 = cv548;
        
        continue;}
      
      }
    const v584 = stdlib.add(v541, v453);
    await ctc.waitUntilTime(v584);
    const txn5 = await (ctc.sendrecv({
      args: [v448, v449, v452, v453, v548, v584],
      evt_cnt: 0,
      funcNum: 8,
      lct: v541,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:157:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v591, time: v590, didSend: v328, from: v589 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v591, time: v590, didSend: v328, from: v589 } = txn5;
    ;
    const v592 = stdlib.addressEq(v448, v589);
    stdlib.assert(v592, {
      at: './index.rsh:157:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v448, v449, v452, v453, v548],
      evt_cnt: 0,
      funcNum: 9,
      lct: v590,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:163:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v595, time: v594, didSend: v333, from: v593 } = txn6;
        
        ;
        const v597 = ['Payment', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v595, time: v594, didSend: v333, from: v593 } = txn6;
    ;
    const v596 = stdlib.addressEq(v448, v593);
    stdlib.assert(v596, {
      at: './index.rsh:163:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v597 = ['Payment', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v609], secs: v611, time: v610, didSend: v372, from: v608 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v616 = stdlib.sub(v548, v548);
    ;
    await stdlib.mapSet(map1, v608, null);
    const v618 = null;
    await txn7.getOutput('Any_requestPayment', 'v618', ctc0, v618);
    const cv524 = v610;
    const cv531 = v616;
    
    v524 = cv524;
    v531 = cv531;
    
    continue;
    
    
    
    
    
    
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v448, v449],
    evt_cnt: 0,
    funcNum: 5,
    lct: v524,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:189:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v627, time: v626, didSend: v391, from: v625 } = txn4;
      
      ;
      const v629 = ['Finished', null];
      null;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v627, time: v626, didSend: v391, from: v625 } = txn4;
  ;
  const v628 = stdlib.addressEq(v448, v625);
  stdlib.assert(v628, {
    at: './index.rsh:189:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v629 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  
  
  };
export async function Any_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 12, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [12]');
  if (step == 12) {return _Any_contribute12(ctcTop, interact);}
  };
export async function Any_requestPayment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 11, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [11]');
  if (step == 11) {return _Any_requestPayment11(ctcTop, interact);}
  };
export async function Contributor_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 13, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [13]');
  if (step == 13) {return _Contributor_register13(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`],
    pure: [`poolDetails()(uint64,uint64,uint64,uint64,byte[200],byte[16])`],
    sigs: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`, `poolDetails()(uint64,uint64,uint64,uint64,byte[200],byte[16])`]
    },
  appApproval: `BiAVAAGYAqACqAICDbACDAUJCwoHCLgCA7eT8dwMl/bqjw3NypKuBgYmBQEAAQEBAgAESP/AeyI1ADEYQQgoK2RJIls1ASEOWzUCMRkjEkEACjEAKCEQr2ZCB/Q2GgAXSUEBNyI1BCM1BkkhEQxAABdJIRIMQAAIIRISRCtCAiMhERJEK0IBQEkhEwxAAQAhExJENAFJIQoMQACDSSELDEAATUkhCAxAADJJIQYMQAAXIQYSRChkKWRQKmRQSTUDVyD4NQdCB5dIKGQpZFAqZFBJNQNXIPg1B0IHg0goZClkUCpkUEk1A1cg+DUHQgdvSSEMDEAAFEgoZClkUCpkUEk1A1cg+DUHQgdUSChkKWRQKmRQSTUDVyD4NQdCB0BJIQkMQAA1SSENDEAAFyENEkQoZClkUCpkUEk1A1cg+DUHQgcbIQkSRChkKWRQKmRQSTUDVyD4NQdCBwRJIQUMQAAXIQUSRChkKWRQKmRQSTUDVyD4NQdCBuYjEkQoZClkUCpkUEk1A1cg+DUHQgbQgYTLwvwDEkQrQgGYNhoCFzUENhoDNhoBF0khDgxAAvlJIQsMQAFuSSEIDEAA5UkhBgxAAIwhBhJEIQY0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyEHWzX/STUFNf6ABO1+vfs0/lCwNP+IBpcxACgxAIgGgCMiTFZmJwQxAFA0/xZQsIAIAAAAAAAAAgKwKzUHNANXACA0A1cg+DQDJFs0AyVbNAMhBFs0/zQDIQ9bIwgyBjQDgcACWzT/CEIEgkghCDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABMqrzjewMgY0AyEHWw9ENP8xABJENP80A1cg+DQDJFs0AyVbIjIGNAMhBFtCBNRIIQg0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyRbNf9JNQU1/oAEn9ybtTT+ULAyBjQDIQdbDEQ0/4gFtDEAKDEAiAWdIyEFTFZmJwQxAFA0/xZQsIAIAAAAAAAAAjqwKzUHNANXACA0A1cg+DT/NAMlWyMyBjQDIQRbNP8IQgRSSSEKDEAA/EkhDAxAAHdIIQs0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyEEWzX/STUFNf6ABN908jo0/lCwsSKyATT/sggjshAxALIHszEAKDEAiAUKIyNMVmaACAAAAAAAAAJqsCs1BzQDVwAgNANXIPg0AyRbNAMlWzIGNP9JCUIDkEghDDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf9XIPg1/iRbNf0lWzX8IQRbNfuABKIFZo6wNP8xABJEgAXPAYysArA0/zT+UDT9FlA0/BZQNPsWUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghCzUBMgY1AkIEDEghCjQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpKVwAgNf9XIPg1/iRbNf0lWzX8IQRbNfshB1s1+oAEF/zbLrAyBjT6D0Q0/zEAEkQ0/zT+UDT9FlA0/BZQNPsWUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghDDUBMgY1AkIDi0khBQxAAPdJIQkMQACSSSEUDEAAVCEUEkQhDTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABGG0rAywNP8xABJEgAXPAYysALA0/zQDVyD4NAMkWzQDJVsjMgY0AyEEW0ICZUghCTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABMyZklywNANXACAxABJEgAXPAYysAbBCAs8hBRJEIQU0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A1cAIDX/gARBsUBNsDT/MQASRIAFzwGMrAOwNP80A1cg+DQDJFs0AyVbNAMhBFs0AyEHWyIyBjQDIQ9bQgEsSSMMQACXSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKSklXACA1/1cg+DX+JFs1/SVbNfwhBFs1+yEHWzX6IQ9bNfmABJqLkXSwNPmIAps0/zEAEkQnBDEAUDT5FlCwNP80/lA0/RZQNPwWUDT7FlA0+hZQNPkWUChLAVcAf2cpSwFXf39nKksBV/5CZ0ghBTUBMgY1AkIB8EiBoI0GiAJJIjQBEkQ0BEkiEkw0AhIRREk1BTX/gARHUZUaNP9QsDT/Ils1/jT/IQ5bNf00/4EQWzX8NP+BGFtJNfs0/iEFChJENP4iDUQ0/jT7CDX6MQA0/1A0/hZQNP0WUDT8FlA0+xZQNPoWUChLAVcAf2cpSwFXf39nKksBV/5CZ0gjNQEyBjUCQgFhNf81/jX9Nfw1+zX6Nfk1+DX3NP00+w5BAD409zT4UDT5FlA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXf39nKksBV/5KZ0ghBjUBMgY1AkIBCTT3NPg0+TT6NP40/0IAADX/Nf41/TX8NftJNfo0+1A0/BZQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZypLAVf+MmdIIQ01ATIGNQJCAL01/zX+Nf01/DX7Nfo1+TT9QQBRgf///////////wE0/gk0/AkiD0Q0/jT8CDX4NPk0+lA0+xZQNPwWUDT/FlA0+BZQKEsBVwB/ZylLAVd/f2cqSwFX/jpnSCEINQEyBjUCQgBZNP40/Ag1+DT5NPpQNPsWUDT8FlA0/xZQNPgWUChLAVcAf2cpSwFXf39nKksBV/46Z0ghCjUBMgY1AkIAHDEZIQkSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBBDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghEK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 3,
  stateKeys: 3,
  stateSize: 328,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxUsers",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_poolDescription",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes16",
                        "name": "elem0",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v449",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T15",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_Contribution",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Finished",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Payment",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Registration",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "PoolPhase_phase",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "Update_info",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxUsers",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_poolDescription",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes16",
                        "name": "elem0",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v449",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v609",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v563",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v507",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v514",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v570",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v618",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Any_contribute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Any_requestPayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Contributor_register",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v609",
                "type": "bool"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v563",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v507",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "poolDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_contributionAmt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_duration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_maxUsers",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_penaltyAmt",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "elem6",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T1",
            "name": "_poolDescription",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes16",
                "name": "elem0",
                "type": "bytes16"
              }
            ],
            "internalType": "struct T2",
            "name": "_poolName",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200376f3803806200376f83398101604081905262000026916200043c565b60008080554360035560408051602081018252918252517f8feaf1d0bfcc4fa330a629199a35f88277bf82201ac8c0e341f9c4957bec7b80906200006e9033908590620005ef565b60405180910390a162000084341560086200017e565b60208201515151620000b1906200009e9060029062000627565b602084015151606001511460096200017e565b60208201515151620000c7901515600a6200017e565b60208201515160608101519051620000e091906200064a565b8152620000ec620001a8565b3381526020808401805151828401528051515160408085019190915281515183015160608086019190915282515182015160808601529151519091015160a0840152835160c084015260016000819055439055516200014e9183910162000671565b60405160208183030381529060405260029080519060200190620001749291906200025f565b5050505062000712565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060e0016040528060006001600160a01b03168152602001620002366040805160c08082018352600080835260208084018290528385018290526060808501839052855160e081018752838152808301849052808701849052908101839052608080820184905260a08083018590529482018490528501528451908101909452835281019190915290565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b8280546200026d90620006d5565b90600052602060002090601f016020900481019282620002915760008555620002dc565b82601f10620002ac57805160ff1916838001178555620002dc565b82800160010185558215620002dc579182015b82811115620002dc578251825591602001919060010190620002bf565b50620002ea929150620002ee565b5090565b5b80821115620002ea5760008155600101620002ef565b604080519081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b600060208284031215620003e257600080fd5b604051602081016001600160401b03811182821017156200041357634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160801b0319811681146200043457600080fd5b905292915050565b60008183036101a08112156200045157600080fd5b6200045b62000305565b8351815261018080601f19840112156200047457600080fd5b6200047e6200033c565b620004886200036d565b6020870151815260408701516020820152606087015160408201526080870151606082015260e0609f1986011215620004c057600080fd5b620004ca6200039e565b60a088810151825260c0890151602083015260e0890151604083015261010089015160608301526101208901516080830152610140890151908201526101608801519095506001600160c01b0319811681146200052657600080fd5b60c0860152608081018590526200054088888501620003cf565b60a08201528152602083015250949350505050565b80518252602081015160208301526040810151604083015260608101516060830152608081015180516080840152602081015160a0840152604081015160c0840152606081015160e0840152608081015161010084015260a081015161012084015260018060c01b031960c0820151166101408401525060a0810151620005ea610160840182516001600160801b0319169052565b505050565b60006101c08201905060018060a01b03841682528251602083015260208301516200061f60408401825162000555565b509392505050565b6000826200064557634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156200066c57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b03168152602080830151610240830191620006989084018262000555565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c0909201516102209091015290565b600181811c90821680620006ea57607f821691505b602082108114156200070c57634e487b7160e01b600052602260045260246000fd5b50919050565b61304d80620007226000396000f3fe6080604052600436106101175760003560e01c80638020c5b01161009a578063ab53f2c611610061578063ab53f2c614610275578063c798003714610298578063cadc2e7a146102ab578063de736998146102cb578063e533a29d146102de57005b80638020c5b0146101f8578063817d57f31461021a578063832307571461023a5780638e3147691461024f578063a9b9855c1461026257005b80632d27d46c116100de5780632d27d46c146101955780633bc5b7bf1461019d57806379aba123146101ca5780637eea518c146101dd5780637f33c0f5146101f057005b806311faee8c1461012057806316013779146101335780631a15cef8146101465780631e93b0f1146101635780632c10a1591461018257005b3661011e57005b005b61011e61012e366004612639565b6102f1565b61011e610141366004612639565b61032a565b61014e61035f565b60405190151581526020015b60405180910390f35b34801561016f57600080fd5b506003545b60405190815260200161015a565b61011e610190366004612639565b61039f565b61014e6103d4565b3480156101a957600080fd5b506101bd6101b8366004612671565b610414565b60405161015a91906126a4565b61011e6101d8366004612639565b610440565b61011e6101eb366004612639565b610475565b61014e6104aa565b34801561020457600080fd5b5061020d6104e7565b60405161015a919061277e565b34801561022657600080fd5b506101bd610235366004612671565b6108bd565b34801561024657600080fd5b50600154610174565b61011e61025d366004612639565b6108e3565b61011e610270366004612639565b610918565b34801561028157600080fd5b5061028a61094d565b60405161015a92919061278d565b61011e6102a6366004612639565b6109ea565b3480156102b757600080fd5b506101bd6102c6366004612671565b610a1f565b61011e6102d9366004612639565b610a45565b61011e6102ec366004612639565b610a7a565b6040805160608101825260008082526020820181905291810191909152610326610320368490038401846128f6565b82610aaf565b5050565b6040805160608101825260008082526020820181905291810191909152610326610359368490038401846129ad565b82610c53565b600061036961227d565b602081810151600090819052604080516060810182528281529283018290528201526103958282610e81565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526103266103ce368490038401846128f6565b826110cc565b60006103de61227d565b6020818101516000908190526040805160608101825282815292830182905282015261040a82826112cf565b6020015192915050565b604080516060810182526000808252602082018190529181019190915261043a826114cc565b92915050565b604080516060810182526000808252602082018190529181019190915261032661046f368490038401846129ad565b826112cf565b60408051606081018252600080825260208201819052918101919091526103266104a4368490038401846128f6565b826115a5565b60006104b461227d565b602081810151600090819052604080516060810182528281529283018290528201526104e08282610c53565b5192915050565b6104ef6122ac565b6001600054141561059a57600060028054610509906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610535906129c9565b80156105825780601f1061055757610100808354040283529160200191610582565b820191906000526020600020905b81548152906001019060200180831161056557829003601f168201915b505050505080602001905181019061040a9190612b26565b600260005414156105b457600060028054610509906129c9565b6005600054141561065f576000600280546105ce906129c9565b80601f01602080910402602001604051908101604052809291908181526020018280546105fa906129c9565b80156106475780601f1061061c57610100808354040283529160200191610647565b820191906000526020600020905b81548152906001019060200180831161062a57829003601f168201915b505050505080602001905181019061040a9190612b9e565b6007600054141561070a57600060028054610679906129c9565b80601f01602080910402602001604051908101604052809291908181526020018280546106a5906129c9565b80156106f25780601f106106c7576101008083540402835291602001916106f2565b820191906000526020600020905b8154815290600101906020018083116106d557829003601f168201915b505050505080602001905181019061040a9190612c66565b600960005414156107b557600060028054610724906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610750906129c9565b801561079d5780601f106107725761010080835404028352916020019161079d565b820191906000526020600020905b81548152906001019060200180831161078057829003601f168201915b505050505080602001905181019061040a9190612cf1565b600a60005414156107cf57600060028054610679906129c9565b600b60005414156107e957600060028054610679906129c9565b600c600054141561080357600060028054610724906129c9565b600d60005414156108ae5760006002805461081d906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906129c9565b80156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b505050505080602001905181019061040a9190612d0e565b6108ba60006007611787565b90565b604080516060810182526000808252602082018190529181019190915261043a826117ac565b6040805160608101825260008082526020820181905291810191909152610326610912368490038401846128f6565b82611839565b6040805160608101825260008082526020820181905291810191909152610326610947368490038401846129ad565b82610e81565b600060606000546002808054610962906129c9565b80601f016020809104026020016040519081016040528092919081815260200182805461098e906129c9565b80156109db5780601f106109b0576101008083540402835291602001916109db565b820191906000526020600020905b8154815290600101906020018083116109be57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610326610a19368490038401846128f6565b826119b9565b604080516060810182526000808252602082018190529181019190915261043a82611b81565b6040805160608101825260008082526020820181905291810191909152610326610a74368490038401846128f6565b82611c0e565b6040805160608101825260008082526020820181905291810191909152610326610aa9368490038401846128f6565b82611df8565b610abf600c60005414602e611787565b8151610ada901580610ad357508251600154145b602f611787565b600080805560028054610aec906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b18906129c9565b8015610b655780601f10610b3a57610100808354040283529160200191610b65565b820191906000526020600020905b815481529060010190602001808311610b4857829003601f168201915b5050505050806020019051810190610b7d9190612cf1565b9050610b918160a001514310156030611787565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf3384604051610bc2929190612d8f565b60405180910390a1610bd63415602c611787565b8051610bee906001600160a01b03163314602d611787565b610bf661231b565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151845190910152818301805160009052805143930192909252608084015191510152610c4d81611f8a565b50505050565b610c63600c600054146029611787565b8151610c7e901580610c7757508251600154145b602a611787565b600080805560028054610c90906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610cbc906129c9565b8015610d095780601f10610cde57610100808354040283529160200191610d09565b820191906000526020600020905b815481529060010190602001808311610cec57829003601f168201915b5050505050806020019051810190610d219190612cf1565b9050610d348160a001514310602b611787565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b7891392733384604051610d65929190612db7565b60405180910390a1610d7e816040015134146028611787565b33600081815260066020908152604091829020805462ff00ff19166001179055838201518251938452908301527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a1604051600081527fc893f3a8ab427977403f8f3db723d105d137185641ed8643491dff1de076fa6d9060200160405180910390a160008252610e1661231b565b815181516001600160a01b0390911690526020808301518251820152604080840180518451909201919091526060808501518451909101528183018051600190525143920191909152516080830151610e6f9190612df7565b602082015160400152610c4d81611f8a565b610e91600d600054146032611787565b8151610eac901580610ea557508251600154145b6033611787565b600080805560028054610ebe906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610eea906129c9565b8015610f375780601f10610f0c57610100808354040283529160200191610f37565b820191906000526020600020905b815481529060010190602001808311610f1a57829003601f168201915b5050505050806020019051810190610f4f9190612d0e565b90507fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a33384604051610f82929190612db7565b60405180910390a1610f9b8160a0015134146031611787565b33600081815260046020908152604091829020805462ff00ff1916600117905560a08401518251938452908301527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a1604051600081527f86f67d2c2862cbb068a5628ee0248657beffb7bf261d4ec37981f2d945485ba09060200160405180910390a160006040830152611037612351565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015260608083015182519091015260808083015182519091015260a08083015182519091015260c082015161109590600190612df7565b602080830180519290925290514391015260a082015160e08301516110ba9190612df7565b602082015160400152610c4d81612100565b6110dc600160005414600d611787565b81516110f79015806110f057508251600154145b600e611787565b600080805560028054611109906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611135906129c9565b80156111825780601f1061115757610100808354040283529160200191611182565b820191906000526020600020905b81548152906001019060200180831161116557829003601f168201915b505050505080602001905181019061119a9190612b26565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516111cd929190612d8f565b60405180910390a16111e68160c001513414600b611787565b80516111fe906001600160a01b03163314600c611787565b60c08101516040805133815260208101929092527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a161124561238d565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260c08085015190840152600260005543600155516112a491839101612e0f565b604051602081830303815290604052600290805190602001906112c89291906123d9565b5050505050565b6112df600b600054146026611787565b81516112fa9015806112f357508251600154145b6027611787565b60008080556002805461130c906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611338906129c9565b80156113855780601f1061135a57610100808354040283529160200191611385565b820191906000526020600020905b81548152906001019060200180831161136857829003601f168201915b505050505080602001905181019061139d9190612c66565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc33846040516113d0929190612db7565b60405180910390a16113e434156025611787565b6080810151604051339180156108fc02916000818181858888f19350505050158015611414573d6000803e3d6000fd5b50336000908152600560209081526040808320805462ff00ff19166001179055519182527f72e7958413224b303ce1be19e1dd8dd38814de4587e675c0fa8f415973573061910160405180910390a16000602083015261147261245d565b815181516001600160a01b039091169052602080830151825182015260408084015183519091015260608084015183519091015281015143905260808201516114bb9080612e71565b6020808301510152610c4d81612221565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156115185761151861268e565b1415611595576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156115595761155961268e565b600181111561156a5761156a61268e565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6115b56002600054146011611787565b81516115d09015806115c957508251600154145b6012611787565b6000808055600280546115e2906129c9565b80601f016020809104026020016040519081016040528092919081815260200182805461160e906129c9565b801561165b5780601f106116305761010080835404028352916020019161165b565b820191906000526020600020905b81548152906001019060200180831161163e57829003601f168201915b50505050508060200190518101906116739190612b26565b905061167d612492565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033856040516116ae929190612d8f565b60405180910390a16116c23415600f611787565b81516116da906001600160a01b031633146010611787565b805160039052805160006080909101528051604051600080516020612ff88339815191529161170891612e88565b60405180910390a1611718612351565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184519091015260808086015184519091015260a08086015184519091015281830180516000905280514393019290925260c0850151915101526112c881612100565b816103265760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156117f8576117f861268e565b1415611595576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156115595761155961268e565b6118496005600054146015611787565b815161186490158061185d57508251600154145b6016611787565b600080805560028054611876906129c9565b80601f01602080910402602001604051908101604052809291908181526020018280546118a2906129c9565b80156118ef5780601f106118c4576101008083540402835291602001916118ef565b820191906000526020600020905b8154815290600101906020018083116118d257829003601f168201915b50505050508060200190518101906119079190612b9e565b9050611911612492565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3385604051611942929190612d8f565b60405180910390a161195634156013611787565b815161196e906001600160a01b031633146014611787565b8051600190528051600060409182015281519051600080516020612ff88339815191529161199b91612e88565b60405180910390a160008080556001819055610c4d906002906124c4565b6119c96007600054146019611787565b81516119e49015806119dd57508251600154145b601a611787565b6000808055600280546119f6906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611a22906129c9565b8015611a6f5780601f10611a4457610100808354040283529160200191611a6f565b820191906000526020600020905b815481529060010190602001808311611a5257829003601f168201915b5050505050806020019051810190611a879190612c66565b9050611a91612492565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3385604051611ac2929190612d8f565b60405180910390a1611ad634156017611787565b8151611aee906001600160a01b031633146018611787565b80516000908190528151602001528051604051600080516020612ff883398151915291611b1a91612e88565b60405180910390a1611b2a61231b565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051600190528051439301929092526080850151915101526112c881611f8a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611bcd57611bcd61268e565b1415611595576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156115595761155961268e565b611c1e600a600054146023611787565b8151611c39901580611c3257508251600154145b6024611787565b600080805560028054611c4b906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611c77906129c9565b8015611cc45780601f10611c9957610100808354040283529160200191611cc4565b820191906000526020600020905b815481529060010190602001808311611ca757829003601f168201915b5050505050806020019051810190611cdc9190612c66565b9050611ce6612492565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3385604051611d17929190612d8f565b60405180910390a1611d2b34156021611787565b8151611d43906001600160a01b031633146022611787565b805160029052805160006060909101528051604051600080516020612ff883398151915291611d7191612e88565b60405180910390a1611d816124fe565b82516001600160a01b0316815260208084015181830152604080850151818401526060808601519084015260808086015190840152600b6000554360015551611dcc91839101612f1d565b60405160208183030381529060405260029080519060200190611df09291906123d9565b505050505050565b611e08600960005414601e611787565b8151611e23901580611e1c57508251600154145b601f611787565b600080805560028054611e35906129c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611e61906129c9565b8015611eae5780601f10611e8357610100808354040283529160200191611eae565b820191906000526020600020905b815481529060010190602001808311611e9157829003601f168201915b5050505050806020019051810190611ec69190612cf1565b9050611eda8160a001514310156020611787565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611f0b929190612d8f565b60405180910390a1611f1f3415601c611787565b8051611f37906001600160a01b03163314601d611787565b611f3f6124fe565b81516001600160a01b0316815260208083015181830152604080840151818401526060808501519084015260808085015190840152600a60005543600155516112a491839101612f1d565b60408051808201909152600080825260208201526020820151511561207e578151606001516020808401510151611fdd91600091611fca90600019612e71565b611fd49190612e71565b1015601b611787565b8151606001516020808401510151611ff59190612df7565b8152611fff61253c565b8251516001600160a01b03168152825160209081015181830152835160409081015181840152845160609081015190840152818501518101516080840152835160a0840152600c600055436001555161205a91839101612f7b565b60405160208183030381529060405260029080519060200190610c4d9291906123d9565b81516060015160208084015101516120969190612df7565b60208201526120a361253c565b8251516001600160a01b031681528251602090810151818301528351604090810151818401528451606090810151908401528185015181015160808401528382015160a08401526009600055436001555161205a91839101612f7b565b805160800151602082015151116121b657612119612581565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152835160609081015190840152835160809081015190840152835160a0908101519084015281840180515160c08501525181015160e0840152600d600055436001555161218d91839101612f8a565b604051602081830303815290604052600290805190602001906121b19291906123d9565b505050565b6121be61245d565b81515181516001600160a01b03909116905281516020908101518251820152825160409081015183518201528351606090810151845190910152818401805183015183850180519190915290519091015190519091015261032681612221565b50565b6122296124fe565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528351606090810151908401528184015182015160808401526007600055436001555161218d91839101612f1d565b6040518060400160405280600081526020016122a760405180602001604052806000151581525090565b905290565b6040805160c08082018352600080835260208084018290528385018290526060808501839052855160e081018752838152808301849052808701849052908101839052608080820184905260a08083018590529482018490528501528451908101909452835281019190915290565b604051806040016040528061232e6125d5565b815260408051606081018252600080825260208281018290529282015291015290565b604051806040016040528061236461253c565b81526020016122a760405180606001604052806000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016123b06122ac565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b8280546123e5906129c9565b90600052602060002090601f016020900481019282612407576000855561244d565b82601f1061242057805160ff191683800117855561244d565b8280016001018555821561244d579182015b8281111561244d578251825591602001919060010190612432565b5061245992915061260c565b5090565b60405180604001604052806124706125d5565b81526020016122a7604051806040016040528060008152602001600081525090565b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b5080546124d0906129c9565b6000825580601f106124e0575050565b601f01602090049060005260206000209081019061221e919061260c565b6040518060a0016040528060006001600160a01b031681526020016125216122ac565b81526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200161255f6122ac565b8152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016125a56122ac565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016125f86122ac565b815260200160008152602001600081525090565b5b80821115612459576000815560010161260d565b60006040828403121561263357600080fd5b50919050565b60006040828403121561264b57600080fd5b6126558383612621565b9392505050565b6001600160a01b038116811461221e57600080fd5b60006020828403121561268357600080fd5b81356126558161265c565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106126bb576126bb61268e565b8083525060208301511515602083015260408301511515604083015292915050565b80518252602081015160208301526040810151604083015260608101516060830152608081015180516080840152602081015160a0840152604081015160c0840152606081015160e0840152608081015161010084015260a081015161012084015267ffffffffffffffff60c01b60c0820151166101408401525060a08101516121b1610160840182516fffffffffffffffffffffffffffffffff19169052565b610180810161043a82846126dd565b82815260006020604081840152835180604085015260005b818110156127c1578581018301518582016060015282016127a5565b818111156127d3576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561281b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561281b57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561281b57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561281b57634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561281b57634e487b7160e01b600052604160045260246000fd5b803580151581146115a057600080fd5b60006040828403121561290857600080fd5b6040516040810181811067ffffffffffffffff8211171561293957634e487b7160e01b600052604160045260246000fd5b6040528235815261294c602084016128e6565b60208201529392505050565b6000818303604081121561296b57600080fd5b612973612821565b8335815291506020601f198201121561298b57600080fd5b506129946127ea565b6129a0602084016128e6565b8152602082015292915050565b6000604082840312156129bf57600080fd5b6126558383612958565b600181811c908216806129dd57607f821691505b6020821081141561263357634e487b7160e01b600052602260045260246000fd5b80516115a08161265c565b600060208284031215612a1b57600080fd5b612a236127ea565b905081516fffffffffffffffffffffffffffffffff1981168114612a4657600080fd5b815292915050565b6000818303610180811215612a6257600080fd5b612a6a612852565b91508251825260208301516020830152604083015160408301526060830151606083015260e0607f1982011215612aa057600080fd5b50612aa9612883565b6080830151815260a0830151602082015260c0830151604082015260e08301516060820152610100830151608082015261012083015160a082015261014083015167ffffffffffffffff60c01b81168114612b0357600080fd5b60c08201526080820152612b1b836101608401612a09565b60a082015292915050565b60006102408284031215612b3957600080fd5b612b41612883565b8251612b4c8161265c565b8152612b5b8460208501612a4e565b60208201526101a083015160408201526101c083015160608201526101e0830151608082015261020083015160a08201526102209092015160c083015250919050565b60006101a08284031215612bb157600080fd5b612bb9612821565b8251612bc48161265c565b815261294c8460208501612a4e565b60006102008284031215612be657600080fd5b60405160a0810181811067ffffffffffffffff82111715612c1757634e487b7160e01b600052604160045260246000fd5b80604052508091508251612c2a8161265c565b8152612c398460208501612a4e565b60208201526101a083015160408201526101c083015160608201526101e083015160808201525092915050565b60006102008284031215612c7957600080fd5b6126558383612bd3565b60006102208284031215612c9657600080fd5b612c9e612852565b90508151612cab8161265c565b8152612cba8360208401612a4e565b60208201526101a082015160408201526101c082015160608201526101e0820151608082015261020082015160a082015292915050565b60006102208284031215612d0457600080fd5b6126558383612c83565b60006102608284031215612d2157600080fd5b612d296128b4565b612d32836129fe565b8152612d418460208501612a4e565b60208201526101a083015160408201526101c083015160608201526101e0830151608082015261020083015160a082015261022083015160c08201526102409092015160e083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b6001600160a01b038316815260608101612655602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115612e0a57612e0a612de1565b500190565b81516001600160a01b03168152602080830151610240830191612e34908401826126dd565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c0909201516102209091015290565b600082821015612e8357612e83612de1565b500390565b815160a082019060048110612e9f57612e9f61268e565b8083525060208301511515602083015260408301511515604083015260608301511515606083015260808301511515608083015292915050565b80516001600160a01b0316825260208082015190612ef9908401826126dd565b5060408101516101a083015260608101516101c0830152608001516101e090910152565b610200810161043a8284612ed9565b80516001600160a01b0316825260208082015190612f4c908401826126dd565b5060408101516101a083015260608101516101c083015260808101516101e083015260a0015161020090910152565b610220810161043a8284612f2c565b81516001600160a01b03168152602080830151610260830191612faf908401826126dd565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c083015161022083015260e090920151610240909101529056fe385b700acb9c5a16396d97c0b604654805d090853851b76400b56b07250c5234a2646970667358221220eb63e7194dec134eac3807892544d74b4fe082f9a1975c7586c771e6a46d71ad64736f6c634300080c0033`,
  BytecodeLen: 14191,
  Which: `oD`,
  version: 7,
  views: {
    poolDetails: `poolDetails`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:188:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:191:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:118:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:155:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:162:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:165:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:131:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:96:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Any_contribute": Any_contribute,
  "Any_requestPayment": Any_requestPayment,
  "Contributor_register": Contributor_register,
  "PoolCreator": PoolCreator
  };
export const _APIs = {
  Any: {
    contribute: Any_contribute,
    requestPayment: Any_requestPayment
    },
  Contributor: {
    register: Contributor_register
    }
  };
