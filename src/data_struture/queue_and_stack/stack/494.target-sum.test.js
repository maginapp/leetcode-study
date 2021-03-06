import {
  findTargetSumWays,
  findTargetSumWays_self_dfs,
  findTargetSumWays_self_dfs_pre,
  findTargetSumWays_dfs,
  findTargetSumWays_dfs_yichu,
  findTargetSumWays_study_1,
  findTargetSumWays_chaoshi,
  findTargetSumWays_study_2,
  findTargetSumWays_self_dp,
  findTargetSumWays_self_dp_promoted
} from './494.target-sum'

/* eslint-disable */
const example = [
  [[1, 1, 1, 1, 1], 3, 5],
  [[1, 1, 1, 1, 1, 1, 1], 3, 21],
  [[1, 4, 5, 3, 4, 3, 3, 2, 3], 16, 13],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 18, 53],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 3, 13], 23, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 23, 675],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 25, 644],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 24, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 14, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 16, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 20, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 24, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 14, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 16, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 20, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 24, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 14, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 16, 0],
  [[1, 4, 5, 3, 4, 8, 7, 12, 2, 2, 12, 5, 8, 3, 13], 20, 0]
]
/* eslint-enable */

describe('valid-parentheses', () => {
  it('findTargetSumWays_study_1', () => {
    example.forEach(item => {
      expect(findTargetSumWays_study_1(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_chaoshi', () => {
    example.forEach(item => {
      expect(findTargetSumWays_chaoshi(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_study_2', () => {
    example.forEach(item => {
      expect(findTargetSumWays_study_2(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_dfs', () => {
    example.forEach(item => {
      expect(findTargetSumWays_dfs(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_dfs_yichu', () => {
    example.forEach(item => {
      expect(findTargetSumWays_dfs_yichu(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_self_dfs', () => {
    example.forEach(item => {
      expect(findTargetSumWays_self_dfs(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_self_dfs_pre', () => {
    example.forEach(item => {
      expect(findTargetSumWays_self_dfs_pre(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_self_dp', () => {
    example.forEach(item => {
      expect(findTargetSumWays_self_dp(...item)).toEqual(item[item.length - 1])
    })
  })
  it('findTargetSumWays_self_dp_promoted', () => {
    example.forEach(item => {
      expect(findTargetSumWays_self_dp_promoted(...item)).toEqual(item[item.length - 1])
    })
  })
})
