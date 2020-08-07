import { cloneGraph, cloneGraph_study, createGragh, graphToArray, cloneGraphDfs } from './133-clone-graph'

/* eslint-disable */
const list = [
  [[2, 4],[1, 3],[2, 4],[1, 3]],
  [[2, 5],[1, 3],[2, 4],[3, 5], [4, 1]]
]

const example = [
  [createGragh(list[0]), list[0]],
  [createGragh(list[1]), list[1]]
]

describe('133-clone-graph', () => {
  it('cloneGraph', () => {
    example.forEach(item => {
      expect(graphToArray(cloneGraph(item[0]))).toEqual(item[1])
    })
  })
  it('cloneGraph_study', () => {
    example.forEach(item => {
      expect(graphToArray(cloneGraph_study(item[0]))).toEqual(item[1])
    })
  })
  it('cloneGraphDfs', () => {
    example.forEach(item => {
      expect(graphToArray(cloneGraphDfs(item[0]))).toEqual(item[1])
    })
  })
})


