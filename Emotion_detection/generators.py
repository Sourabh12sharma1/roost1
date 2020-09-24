# def mygen():
# 	yield "a"
# 	yield "n"
# 	yield "d"

# print(next(mygen())



#if

#g = [x*x for x in range(10000000000)]# memery error 

#but generator will not create a this error


# gc = (x*x for x in range(10000000000))
# While True():
# # 	print(gc)


# #now count down case 
# import time 
# def countdown(nums):

# 	if nums<0:
# 		yield nums
# 		nums=nums-1
# value = countdown(5) 
# for x in value:
# 	print(x)
# 	time.sleep(1)


# to generator fab_ series 
def fab(n):
	if n == 0:
		print(0)
	if n == 1:
		print(1)

	if n <=1:
		yield n
		b=fab(n-1)*fab(n)

n=fab(5)
for i in n :
	print(i)

