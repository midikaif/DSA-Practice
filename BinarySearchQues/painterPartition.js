
/**
 *          Painter Partition
 * You are provided with ‘n’ number of boards of length [b1, b2,..bn].There are ‘a’ painters available in the market and each painter
takes one(1) unit time to paint one(1) unit of board. We need to find the minimum time to get the job done under the constraints that any painter will only paint contiguous sections of the board.


    Input ->    [10, 20, 30, 40]
                2
    Output ->   60


    Solution ->
        [10, 20, 30, 40]
        Case 1: P1 -> 10; P2 -> 20+30+40 -> 90; Max => 90
        Case 2: P1 -> 10+20 -> 30; P2 -> 30+40 -> 70; Max => 70
        Case 3: P1 -> 10+20+30 -> 60; P2 -> 40 -> 40; Max => 60

        Minimum(Max) => 60;

 */

        function canPaintBoards(boards, mid, p) {
            let painters = 1;
            let paintedBoards = 0;
            for (let i = 0; i < boards.length; i++){
                if (paintedBoards + boards[i] > mid) {
                    painters++;
                    paintedBoards = boards[i];
                    if (painters > p) return false;
                }
                else paintedBoards += boards[i];
            }
            return true;
        }
        
        
        function minimummax(boards, p) {
            let start = boards[boards.length - 1];
            let end = boards.reduce((a, b) => a + b);
            let ans = start;
            while (start<=end) {
                let mid = start + Math.floor((end - start) / 2);
                if (canPaintBoards(boards, mid, p)) {
                    ans = mid;
                    end = mid - 1;
                }
                else {
                    start = mid + 1;
                }
            }
            return ans;
        }
        
        console.log(minimummax([10, 20, 30, 40], 2));