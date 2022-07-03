var insert = function (intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval]
    }

    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval)
        return intervals
    }
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval)
        return intervals
    }
    idxBeg = 0;  //These variables are the indexes of the interval(s) 
    idxEnd = 0;  // that will be replaced, or where newInterval needs
    beg = 0;    //  to be placed. beg and end hold the actual range.
    end = 0;

    //FIND BEGINNING OF NEW RANGE
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {
            idxBeg = i;
            beg = intervals[i][0]
            break
        }
        if (intervals[i][0] > newInterval[0]) {
            idxBeg = i
            beg = newInterval[0];
            break
        }
    }
    //FIND ENDING OF NEW RANGE
    for (let i = intervals.length - 1; i >= 0; i--) {
        if (intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1]) {
            idxEnd = i;
            end = intervals[i][1]
            break
        }
        if (intervals[i][0] < newInterval[1]) {
            idxEnd = i
            end = newInterval[1];
            break
        }
    }

    const numOfIntervalsToDelete = idxEnd - idxBeg + 1;
    intervals.splice(idxBeg, numOfIntervalsToDelete, [beg, end])
    return intervals;
};