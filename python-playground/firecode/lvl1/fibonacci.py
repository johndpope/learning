#!/usr/bin/env python
def fib(n):
    if n < 1:
        return 0
    elif n < 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


def main():
    print fib(6)

if __name__ == "__main__":
    main()

