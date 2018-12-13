// https://gist.github.com/tralves/9e5de2bd9f582007a52708d7d4209865

var getTableSize = function(db, dbName){
  return new Promise((resolve,reject) => {
    if (db == null) {
      return reject();
    }
    var size = 0;
    db = event.target.result;
    var transaction = db.transaction([dbName])
      .objectStore(dbName)
      .openCursor();

    transaction.onsuccess = function(event){
        var cursor = event.target.result;
        if(cursor){
            var storedObject = cursor.value;
            var json = JSON.stringify(storedObject);
            size += json.length;
            cursor.continue();
        }
        else{
          resolve(size);
        }
    }.bind(this);
    transaction.onerror = function(err){
        reject("error in " + dbName + ": " + err);
    }
  });
};

var getDatabaseSize = function (dbName) {
  var request = indexedDB.open(dbName);
  var db;
  var dbSize = 0;
  request.onerror = function(event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function(event) {
    db = event.target.result;
    var tableNames = [ ...db.objectStoreNames ];
    (function(tableNames, db) {
      var tableSizeGetters = tableNames
        .reduce( (acc, tableName) => {
          acc.push( getTableSize(db, tableName) );
          return acc;
        }, []);

      Promise.all(tableSizeGetters)
        .then(sizes => {
          console.log('--------- ' + db.name + ' -------------');
          tableNames.forEach( (tableName,i) => {
            console.log(" - " + tableName + "\t: " + humanReadableSize(sizes[i]));
          });
          var total = sizes.reduce(function(acc, val) {
            return acc + val;
          }, 0);

          console.log("TOTAL: " + humanReadableSize(total))
        });
      })(tableNames, db);
  };
};

var humanReadableSize = function (bytes) {
  var thresh = 1024;
  if(Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = ['KB','MB','GB','TB','PB','EB','ZB','YB'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1)+' '+units[u];
}

getDatabaseSize('jsons')
getDatabaseSize('jpgs')