
class RequiredErr(Exception):
    def __init__(self, msg):
        self.msg = msg


class ConflictErr(Exception):
    def __init__(self, msg):
        self.msg = msg


class NotFoundErr(Exception):
    def __init__(self, msg):
        self.msg = msg


class BadRequestErr(Exception):
    def __init__(self, msg):
        self.msg = msg
