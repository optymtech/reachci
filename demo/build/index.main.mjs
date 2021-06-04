// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Contestant(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    accountAddress: ctc4,
    inputValue: ctc0,
    returnValue: ctc0,
    timestamp: ctc0
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc6, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc5, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  
  
  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.informBounty(v28, v29), {
    at: './index.rsh:57:38:application',
    fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)'],
    msg: 'informBounty',
    who: 'Contestant'
    });
  
  const v53 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0),
    timestamp: stdlib.checkedBigNumberify('./index.rsh:71:107:decimal', stdlib.UInt_max, 0)
    };
  const v57 = [v53, v53, v53];
  let v50 = v53;
  let v51 = true;
  let v52 = v57;
  let v141 = v32;
  let v143 = v28;
  
  while ((() => {
    
    return v51;})()) {
    const v84 = stdlib.protect(ctc2, await interact.submitValue(), {
      at: './index.rsh:77:74:application',
      fs: ['at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:76:29:function exp)', 'at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)'],
      msg: 'submitValue',
      who: 'Contestant'
      });
    let v86;
    switch (v84[0]) {
      case 'None': {
        
        v86 = false;
        
        break;
        }
      case 'Some': {
        const v90 = v84[1];
        v86 = true;
        
        break;
        }
      }
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 3), [ctc0, ctc5, ctc6, ctc0, ctc0, ctc2], [v29, v50, v52, v141, v143, v84], [stdlib.checkedBigNumberify('./index.rsh:74:26:decimal', stdlib.UInt_max, 0), []], [ctc2], v86, false, v29, (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:dot', stdlib.UInt_max, 2), v29, v50, v52, v143]);
      const [v99] = txn2.data;
      const v103 = txn2.time;
      const v98 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:74:26:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      let v107;
      switch (v99[0]) {
        case 'None': {
          
          v107 = stdlib.checkedBigNumberify('./index.rsh:102:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v111 = v99[1];
          v107 = v111;
          
          break;
          }
        }
      const v118 = stdlib.mod(v107, stdlib.checkedBigNumberify('./index.rsh:46:48:decimal', stdlib.UInt_max, 69));
      const v120 = v50.returnValue;
      const v121 = stdlib.gt(v118, v120);
      const v122 = {
        accountAddress: v98,
        inputValue: v107,
        returnValue: v118,
        timestamp: stdlib.checkedBigNumberify('./index.rsh:111:44:decimal', stdlib.UInt_max, 0)
        };
      const v123 = v121 ? v122 : v50;
      const cv50 = v123;
      const cv51 = true;
      const cv52 = v52;
      const cv141 = v103;
      const cv143 = v143;
      
      (() => {
        const v50 = cv50;
        const v51 = cv51;
        const v52 = cv52;
        const v141 = cv141;
        const v143 = cv143;
        
        if ((() => {
          
          return v51;})()) {
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v143]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v134 = v50.accountAddress;
          sim_r.txns.push({
            amt: v143,
            kind: 'from',
            to: v134,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc9, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
          sim_r.view = [ctc9, []];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 3), [ctc0, ctc5, ctc6, ctc0, ctc0], [v29, v50, v52, v141, v143], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 2), v29, v50, v52, v143]);
        const [] = txn3.data;
        const v128 = txn3.time;
        const v126 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv50 = v50;
        const cv51 = false;
        const cv52 = v52;
        const cv141 = v128;
        const cv143 = v143;
        
        (() => {
          const v50 = cv50;
          const v51 = cv51;
          const v52 = cv52;
          const v141 = cv141;
          const v143 = cv143;
          
          if ((() => {
            
            return v51;})()) {
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v143]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v134 = v50.accountAddress;
            sim_r.txns.push({
              amt: v143,
              kind: 'from',
              to: v134,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc9, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v128 = txn3.time;
      const v126 = txn3.from;
      ;
      const cv50 = v50;
      const cv51 = false;
      const cv52 = v52;
      const cv141 = v128;
      const cv143 = v143;
      
      v50 = cv50;
      v51 = cv51;
      v52 = cv52;
      v141 = cv141;
      v143 = cv143;
      
      continue;
      }
    else {
      const [v99] = txn2.data;
      const v103 = txn2.time;
      const v98 = txn2.from;
      ;
      let v107;
      switch (v99[0]) {
        case 'None': {
          
          v107 = stdlib.checkedBigNumberify('./index.rsh:102:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v111 = v99[1];
          v107 = v111;
          
          break;
          }
        }
      const v118 = stdlib.mod(v107, stdlib.checkedBigNumberify('./index.rsh:46:48:decimal', stdlib.UInt_max, 69));
      const v120 = v50.returnValue;
      const v121 = stdlib.gt(v118, v120);
      const v122 = {
        accountAddress: v98,
        inputValue: v107,
        returnValue: v118,
        timestamp: stdlib.checkedBigNumberify('./index.rsh:111:44:decimal', stdlib.UInt_max, 0)
        };
      const v123 = v121 ? v122 : v50;
      const cv50 = v123;
      const cv51 = true;
      const cv52 = v52;
      const cv141 = v103;
      const cv143 = v143;
      
      v50 = cv50;
      v51 = cv51;
      v52 = cv52;
      v141 = cv141;
      v143 = cv143;
      
      continue;}
    }
  const v134 = v50.accountAddress;
  ;
  return;
  
  };
export async function Funder(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    amt: ctc0,
    deadline: ctc0
    });
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Object({
    accountAddress: ctc5,
    inputValue: ctc0,
    returnValue: ctc0,
    timestamp: ctc0
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc7, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc7, ctc0]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v20 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc1, await interact.getBounty(), {
    at: './index.rsh:49:72:application',
    fs: ['at ./index.rsh:48:24:application call to [unknown function] (defined at: ./index.rsh:48:28:function exp)'],
    msg: 'getBounty',
    who: 'Funder'
    });
  const v25 = v24.amt;
  const v26 = v24.deadline;
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v20, v25, v26], [v25, []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:52:20:dot', stdlib.UInt_max, 0)]);
    const [v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v27 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    const v53 = {
      accountAddress: v27,
      inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
      returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0),
      timestamp: stdlib.checkedBigNumberify('./index.rsh:71:107:decimal', stdlib.UInt_max, 0)
      };
    const v57 = [v53, v53, v53];
    const v50 = v53;
    const v51 = true;
    const v52 = v57;
    const v141 = v32;
    const v143 = v28;
    
    if ((() => {
      
      return v51;})()) {
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v143]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      
      const v134 = v50.accountAddress;
      sim_r.txns.push({
        amt: v143,
        kind: 'from',
        to: v134,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc10, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
      sim_r.view = [ctc10, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v27 = txn1.from;
  ;
  const v53 = {
    accountAddress: v27,
    inputValue: stdlib.checkedBigNumberify('./index.rsh:71:93:decimal', stdlib.UInt_max, 0),
    returnValue: stdlib.checkedBigNumberify('./index.rsh:71:78:decimal', stdlib.UInt_max, 0),
    timestamp: stdlib.checkedBigNumberify('./index.rsh:71:107:decimal', stdlib.UInt_max, 0)
    };
  const v57 = [v53, v53, v53];
  let v50 = v53;
  let v51 = true;
  let v52 = v57;
  let v141 = v32;
  let v143 = v28;
  
  while ((() => {
    
    return v51;})()) {
    const txn2 = await (ctc.recv(4, 1, [ctc3], false, v29));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 3), [ctc0, ctc6, ctc7, ctc0, ctc0], [v29, v50, v52, v141, v143], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:197:33:dot', stdlib.UInt_max, 2), v29, v50, v52, v143]);
        const [] = txn3.data;
        const v128 = txn3.time;
        const v126 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv50 = v50;
        const cv51 = false;
        const cv52 = v52;
        const cv141 = v128;
        const cv143 = v143;
        
        (() => {
          const v50 = cv50;
          const v51 = cv51;
          const v52 = cv52;
          const v141 = cv141;
          const v143 = cv143;
          
          if ((() => {
            
            return v51;})()) {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v141, v143]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 2), v29, v50, v52, v143]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            
            const v134 = v50.accountAddress;
            sim_r.txns.push({
              amt: v143,
              kind: 'from',
              to: v134,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc10, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
            sim_r.view = [ctc10, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v128 = txn3.time;
      const v126 = txn3.from;
      ;
      const cv50 = v50;
      const cv51 = false;
      const cv52 = v52;
      const cv141 = v128;
      const cv143 = v143;
      
      v50 = cv50;
      v51 = cv51;
      v52 = cv52;
      v141 = cv141;
      v143 = cv143;
      
      continue;
      }
    else {
      const [v99] = txn2.data;
      const v103 = txn2.time;
      const v98 = txn2.from;
      ;
      let v107;
      switch (v99[0]) {
        case 'None': {
          
          v107 = stdlib.checkedBigNumberify('./index.rsh:102:62:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v111 = v99[1];
          v107 = v111;
          
          break;
          }
        }
      const v118 = stdlib.mod(v107, stdlib.checkedBigNumberify('./index.rsh:46:48:decimal', stdlib.UInt_max, 69));
      const v120 = v50.returnValue;
      const v121 = stdlib.gt(v118, v120);
      const v122 = {
        accountAddress: v98,
        inputValue: v107,
        returnValue: v118,
        timestamp: stdlib.checkedBigNumberify('./index.rsh:111:44:decimal', stdlib.UInt_max, 0)
        };
      const v123 = v121 ? v122 : v50;
      const cv50 = v123;
      const cv51 = true;
      const cv52 = v52;
      const cv141 = v103;
      const cv143 = v143;
      
      v50 = cv50;
      v51 = cv51;
      v52 = cv52;
      v141 = cv141;
      v143 = cv143;
      
      continue;}
    }
  stdlib.protect(ctc2, await interact.informLeaderboard(v52), {
    at: './index.rsh:205:43:application',
    fs: ['at ./index.rsh:204:24:application call to [unknown function] (defined at: ./index.rsh:204:28:function exp)'],
    msg: 'informLeaderboard',
    who: 'Funder'
    });
  
  const v134 = v50.accountAddress;
  ;
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 262
    }, null, null, {
    count: 9,
    size: 495
    }, {
    count: 9,
    size: 486
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:52:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 0 Sender
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
store 253
byte base64()
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 254
itob
concat
load 253
concat
load 253
dup
concat
load 253
concat
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 64
store 254
dup
substring 64 232
store 253
dup
substring 232 240
btoi
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 9
store 251
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:71:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 251
int 0
getbyte
int 0
==
bz l1
int 0
store 249
l1:
load 251
int 0
getbyte
int 1
==
bz l2
load 251
substring 1 9
btoi
dup
store 248
store 249
l2:
l0:
load 249
int 69
%
store 248
byte base64()
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
gtxn 0 Sender
load 249
itob
concat
load 248
itob
concat
int 0
itob
concat
load 248
load 254
substring 40 48
btoi
>
select
concat
load 253
concat
load 252
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 64
store 254
dup
substring 64 232
store 253
dup
substring 232 240
btoi
store 252
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:197:33:dot"
// "[at ./index.rsh:71:31:application call to [unknown function] (defined at: ./index.rsh:71:31:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
substring 0 32
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v50",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v52",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v99",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v50",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v52",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v50",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v52",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v99",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v50",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_accountAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_inputValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_returnValue",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2[3]",
                "name": "v52",
                "type": "tuple[3]"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610aff806100826000396000f3fe6080604052600436106100385760003560e01c806310f48adc14610044578063de7c731c14610059578063f0b96c431461006c5761003f565b3661003f57005b600080fd5b610057610052366004610860565b61007f565b005b6100576100673660046107d8565b6101b2565b61005761007a3660046107c0565b6102f8565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100bc57600080fd5b600080556100c8610606565b346020830135146100d857600080fd5b805133905280516000602091820181905282516040908101829052835160609081019290925283518385018051919091528451815185015284519051820152805185358152858401359381019390935284810135908301527f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e9910160405180910390a161016361062b565b80516040808501359091528251602083810180519290925281516001908201528481015182519093019290925280514360609091015251908401356080909101526101ad81610517565b505050565b6040516101c69060029083906020016109a8565b6040516020818303038152906040528051906020012060001c600054146101ec57600080fd5b600080556102008135610220830135610a85565b43101561020c57600080fd5b341561021757600080fd5b7f9b436d354e415c0bd41f8b14988a371b2265fc99b497e597f082a819b33f6691816040516102469190610975565b60405180910390a161025661062b565b80518235905261026e368390038301602084016107ea565b602080830180519290925290516000910181905260408051606081019091529060a0840190600390835b828210156102c4576102b5608083028501368190038101906107ea565b81526020019060010190610298565b5050506020830180516040019290925250805143606090910152516102408301356080909101526102f481610517565b5050565b60405161030c9060029083906020016109a8565b6040516020818303038152906040528051906020012060001c6000541461033257600080fd5b6000805561033e61064c565b61034e8235610220840135610a85565b431061035957600080fd5b341561036457600080fd5b60006103786102808401610260850161079f565b600181111561039757634e487b7160e01b600052602160045260246000fd5b14156103a657600081526103ef565b60016103ba6102808401610260850161079f565b60018111156103d957634e487b7160e01b600052602160045260246000fd5b14156103ef576102a08201356020820181905281525b80516103fd90604590610aa9565b60408083019182526060808401805133905284518151602001529251835183015291516000920191909152517f7a5588223edd6c9a30db36e2f0ec608cb5040adfa4e6f8144d12c2fc7285a68390610456908490610906565b60405180910390a161046661062b565b80518335905260408201516060840135106104925761048d368490038401602085016107ea565b610498565b81606001515b602080830180519290925290516001910152604080516060810190915260a0840160036000835b828210156104eb576104dc608083028501368190038101906107ea565b815260200190600101906104bf565b5050506020830180516040019290925250805143606090910152516102408401356080909101526101ad815b806020015160200151156105935761052d610674565b815151815260208083018051518284015280516040908101518185015281516060908101519085015290516080908101519084015251610572916002918491016109bd565b60408051601f198184030181529190528051602090910120600055506105ba565b61059b6106af565b602080830180515183515251608001518251909101526102f4816105bd565b50565b80518051516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fe573d6000803e3d6000fd5b506000805533ff5b60405180604001604052806106196106cf565b8152602001610626610700565b905290565b6040805160608101825260009181019182529081526020810161062661072d565b60405180608001604052806000815260200160008152602001600081526020016106266106cf565b6040518060a001604052806000815260200161068e6106cf565b815260200161069b610700565b815260200160008152602001600081525090565b60405180604001604052806106c2610754565b8152600060209091015290565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b60405180606001604052806003905b6107176106cf565b81526020019060019003908161070f5790505090565b6040518060a001604052806107406106cf565b81526000602082015260400161069b610700565b60405180604001604052806107676106cf565b8152602001600081525090565b80356001600160a01b038116811461078b57600080fd5b919050565b80356002811061078b57600080fd5b6000602082840312156107b0578081fd5b6107b982610790565b9392505050565b60006102c082840312156107d2578081fd5b50919050565b600061028082840312156107d2578081fd5b6000608082840312156107fb578081fd5b6040516080810181811067ffffffffffffffff8211171561082a57634e487b7160e01b83526041600452602483fd5b60405261083683610774565b81526020830135602082015260408301356040820152606083013560608201528091505092915050565b6000606082840312156107d2578081fd5b6001600160a01b0361088282610774565b1682526020810135602083015260408101356040830152606081013560608301525050565b803582526108bb6020830160208301610871565b60a0820160a0820160005b60038110156108ec576108d98383610871565b60809283019291909101906001016108c6565b505050610220818101359083015261024090810135910152565b6102c0810161091582846108a7565b610260610923818501610790565b6002811061094157634e487b7160e01b600052602160045260246000fd5b908301526102808381013580151580821461095b57600080fd5b80838601525050506102a080840135818401525092915050565b610280810161098482846108a7565b6102608084013580151580821461099a57600080fd5b808386015250505092915050565b82815261028081016107b960208301846108a7565b600061028082019050838252602083518184015280840151610a09604085018280516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b50604084015160c0840160005b6003811015610a6457610a5182845180516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b9183019160809190910190600101610a16565b50505050606083015161024083015260808301516102608301529392505050565b60008219821115610aa457634e487b7160e01b81526011600452602481fd5b500190565b600082610ac457634e487b7160e01b81526012600452602481fd5b50069056fea264697066735822122002b60223b3d98e19d8592a0c421f1f9fc9a00a3a31aa7c615ec5cf8f1b53535364736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

