## BEGIN - PROMPT


def strlen(string: str) -> int:
    """ Return length of given string
    >>> strlen('')
    0
    >>> strlen('abc')
    3
    """

## BEGIN - CANONICAL SOLUTION
    return len(string)

## BEGIN - TEST


METADATA = {
    'author': 'jt',
    'dataset': 'test'
}


def check(candidate):
    assert candidate('') == 0
    assert candidate('x') == 1
    assert candidate('asdasnakj') == 9

## BEGIN - CHECK
check(strlen)