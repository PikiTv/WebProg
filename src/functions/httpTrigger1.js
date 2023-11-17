module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    if (req.query.a && req.query.b && req.query.c) {
        const a = parseFloat(req.query.a);
        const b = parseFloat(req.query.b);
        const c = parseFloat(req.query.c);

        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            const discriminant = b * b - 4 * a * c;

            if (discriminant > 0) {
                const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                context.res = {
                    status: 200,
                    body: {
                        x1: x1,
                        x2: x2
                    }
                };
            } else if (discriminant === 0) {
                const x = -b / (2 * a);

                context.res = {
                    status: 200,
                    body: {
                        x: x
                    }
                };
            } else {
                context.res = {
                    status: 200,
                    body: {
                        message: "Die Gleichung hat keine reellen Lösungen."
                    }
                };
            }
        } else {
            context.res = {
                status: 400,
                body: "Ungültige Werte für a, b oder c."
            };
        }
    } else {
        context.res = {
            status: 400,
            body: "Bitte geben Sie Werte für a, b und c an."
        };
}
}