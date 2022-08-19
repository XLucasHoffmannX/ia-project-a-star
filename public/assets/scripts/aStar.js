async function AStar(M, start, end, points) {
    const N = M.length;
    let queue = new PriorityQueue();
    queue.enqueue(start, 0)

    let prevVertex = [];
    let shortestDistList = [];

    for (let index = 0; index < N; index++) {
        prevVertex.push(0)
        shortestDistList.push(Infinity);
    }

    shortestDistList[start] = 0;
    prevVertex[start] = start;


    while (!queue.is_empty()) {
        current = queue.dequeue();
        /* desenhando caminho atual */
        drawLine(points[current], points[prevVertex[current]], 5, "blue");
        await sleep(350);

        if (current === end) {
            break;
        }

        for (let i = 0; i < N; ++i) {
            if (M[current][i] > 0) {
                const new_cost = shortestDistList[current] + M[current][i];

                if (new_cost < shortestDistList[i]) {
                    shortestDistList[i] = new_cost;
                    priority = new_cost + eucDist(points[i], points[end]);
                    queue.enqueue(i, priority);
                    prevVertex[i] = current;
                }
            }
        }
    }

    let res = [];
    let i = start;
    let j = end;

    while (i != j) {
        res.push([prevVertex[j], j]);
        j = prevVertex[j];
    }
    return res;
}