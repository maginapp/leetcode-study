// https://blog.csdn.net/u013445530/article/details/40210587

/*
背包问题我真是学一次忘一次，很多dp问题也是由这个衍生而来，今天终于痛下决心写个博客供自己日后参考

问题描述：

有N件物品和一个容量为V的背包。第i件物品的费用是c[i]，价值是w[i]。求解将哪些物品装入背包可使价值总和最大。

基本思路 ：
这是最基础的背包问题，特点是：每种物品仅有一件，可以选择放或不放。 用子问题定义状态：即f[i][v]表示前i件物品恰放入一个容量为v的背包可以获得的最大价值。则其状态转移方程便是：tab[i][j] = max(tab[i-1][j-weight[i]]+value[i],tab[i-1][j]) ({i,j|0<i<=n,0<=j<=total})

其中i表示放第i个物品，j表示背包所容纳的重量，那么tab[i-1][j-weight[i]]+value[i]表示放入第i物品，刚开始接触会有疑问，tab[i-1][j-weight[i]]这个值，可以这样理解：tab[i-1][j]为装到上一个物品在背包j容量时的最佳值，那么如果我要求在j容量的时候放入现在的i物品的价值，那么是不是要先得到容量为（j-weight[i]）时候的价值，即先得到 tab[i-1][j-weight[i]] ，所以 tab[i-1][j-weight[i]]+value[i] 为放入第i物品的价值； tab[i-1][j] 就是不放入第i个物品。




例子：5个物品，（重量，价值）分别为：（5，12），（4，3），（7，10），（2，3），（6，6）。


 背包容量 ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'
    5物品 ['0', '0', '0', '0', '0', '0', '6', '12', '12', '15', '15', '18', '22', '22', '25', '25']
    4物品 ['0', '0', '3', '3', '3', '3', '3', '12', '12', '15', '15', '18', '22', '22', '25', '25'],
    3物品 ['0', '0', '0', '0', '0', '0', '0', '12', '12', '15', '15', '15', '22', '22', '22', '22'],
    2物品 ['0', '0', '0', '0', '3', '12', '12', '12', '12', '15', '15', '15', '15', '15', '15', '15'],
    1物品 ['0', '0', '0', '0', '0', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12']



*/

;[
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
  ['0', '0', '0', '0', '0', '0', '6', '12', '12', '15', '15', '18', '22', '22', '25', '25'],
  ['0', '0', '3', '3', '3', '3', '3', '12', '12', '15', '15', '18', '22', '22', '25', '25'],
  ['0', '0', '0', '0', '0', '0', '0', '12', '12', '15', '15', '15', '22', '22', '22', '22'],
  ['0', '0', '0', '0', '3', '12', '12', '12', '12', '15', '15', '15', '15', '15', '15', '15'],
  ['0', '0', '0', '0', '0', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12']
]
