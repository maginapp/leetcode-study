import MyCircularQueue from './queue'

describe('queue test', () => {
  it('expect', () => {
    const circularQueue = new MyCircularQueue(3) // 设置长度为 3
    expect(circularQueue.enQueue(1)).toBe(true)
    expect(circularQueue.enQueue(2)).toBe(true)
    expect(circularQueue.enQueue(3)).toBe(true)
    expect(circularQueue.enQueue(4)).toBe(false)
    expect(circularQueue.size() === 3).toBe(true)
    expect(circularQueue.Rear()).toBe(3)
    expect(circularQueue.isFull()).toBe(true)
    expect(circularQueue.deQueue()).toBe(true)
    expect(circularQueue.enQueue(4)).toBe(true)
    expect(circularQueue.Rear()).toBe(4)
    expect(circularQueue.size()).toBe(3)
  })

  it('expect', () => {
    const circularQueue = new MyCircularQueue(6) // 设置长度为 3
    expect(circularQueue.enQueue(6)).toBe(true)
    expect(circularQueue.Rear()).toBe(6)
    expect(circularQueue.Rear()).toBe(6)
    expect(circularQueue.deQueue()).toBe(true)
    expect(circularQueue.enQueue(5)).toBe(true)
    expect(circularQueue.Rear()).toBe(5)
    expect(circularQueue.deQueue()).toBe(true)
    expect(circularQueue.Front()).toBe(-1)
    expect(circularQueue.deQueue()).toBe(false)
    expect(circularQueue.deQueue()).toBe(false)
    expect(circularQueue.deQueue()).toBe(false)
    expect(circularQueue.Front()).toBe(-1)
    expect(circularQueue.Rear()).toBe(-1)
  })
})
