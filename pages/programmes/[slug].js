import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import PageTitle from "../../components/pageTitle";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import { useEffect, useState } from "react";
import MainLayout from "../../components/mainLayout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "../../components/toast";
import Router from "next/router";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name field Required"),
  qualification: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  course: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.number().required("Required"),
  address: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ProgrammeOpen = ({ programme }) => {
  const errorClasses = "text-red-500 mb-4 text-left w-4/5 uppercase";
  const inputClasses = "border-2 mb-4 p-2 md:w-4/5";
  const labelClasses = "mb-2 text-primaryblue font-bold text-left text-lg";
  // const imageUrl = getStrapiMedia(article.attributes.image);
  // const seo = {
  //   metaTitle: article.attributes.title,
  //   metaDescription: article.attributes.title,
  //   shareImage: article.attributes.image,
  //   article: true,
  // };
  const {
    title,
    description,
    youtube_link,
    syllabus,
    sub_description,
    how_to_apply,
  } = programme.attributes;

  const [openYear, setOpenYear] = useState([]);
  const [openApply, setOpenApply] = useState([]);
  const [currSyllabus, setSyllabus] = useState(syllabus);
  const [currApply, setApply] = useState(how_to_apply);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setOpenYear([]);
    setOpenApply([]);
    var inputs = document.querySelectorAll(".file-input");

    for (var i = 0, len = inputs.length; i < len; i++) {
      customInput(inputs[i]);
    }

    function customInput(el) {
      const fileInput = el.querySelector('[type="file"]');
      const label = el.querySelector("[data-js-label]");

      fileInput.onchange = fileInput.onmouseout = function () {
        if (!fileInput.value) return;

        var value = fileInput.value.replace(/^.*[\\\/]/, "");
        el.className += " -chosen";
        label.innerText = value;
      };
    }
  }, []);
  // Also see: https://www.quirksmode.org/dom/inputfile.html

  const openYearHandler = (ind) => {
    let index = openYear.indexOf(ind);
    let currArr = openYear;
    if (index === -1) {
      currArr.push(ind);
    } else {
      currArr.splice(index, 1);
    }
    setOpenYear(currArr);
    setSyllabus([...syllabus]);
  };

  const openApplyHandler = (ind) => {
    let index = openApply.indexOf(ind);
    let currArr = openApply;
    if (index === -1) {
      currArr.push(ind);
    } else {
      currArr.splice(index, 1);
    }
    setOpenApply(currArr);
    setApply([...how_to_apply]);
  };

  const triggerToast = () => {
    toast({ type: "success", message: "Form Submitted" });
  };

  return (
    <Layout>
      {/* <Seo seo={seo} /> */}
      <PageTitle title="DIPLOMA" />
      <MainLayout>
        <div className="px-10">
          <h1 className="py-2 text-sm md:text-4xl text-primaryblue font-bold text-center my-5">
            {title}
          </h1>
          <YoutubeEmbed embedLink={youtube_link} classes="mt-5 md:h-[30rem]" />
          <div className="flex">
            <div className="mb-5">
              {description && (
                <div className="my-3 text-slate-600 text-center bg-slate-100 p-5">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>

          {sub_description && (
            <div className="my-12">
              <div dangerouslySetInnerHTML={{ __html: sub_description }} />
            </div>
          )}
          {currSyllabus && openYear && (
            <div className="grid grid-cols-3 gap-6">
              {currSyllabus.map((item, ind) => {
                let descShow = openYear.includes(ind);
                return (
                  <div
                    onClick={() => openYearHandler(ind)}
                    className="border-2 p-3 h-min cursor-pointer transition-all year-card"
                    key={ind}
                  >
                    <div className="flex items-center">
                      <div className="bg-sky-700 text-white px-3 mr-2 py-1 text-md">
                        {descShow ? "-" : "+"}
                      </div>
                      <p className="uppercase text-primaryblue">{item.title}</p>
                    </div>
                    {descShow && <p className="mt-5">{item.description}</p>}
                  </div>
                );
              })}
            </div>
          )}

          <h1 className="text-center mt-10 mb-7 text-2xl font-bold">
            HOW TO APPLY
          </h1>

          {currApply && openApply && (
            <div>
              {currApply.map((item, ind) => {
                let descShow = openApply.includes(ind);
                return (
                  <div
                    onClick={() => openApplyHandler(ind)}
                    className="border-2 p-3 h-min cursor-pointer mb-2"
                    key={ind}
                  >
                    <div className="flex items-center">
                      <div className="bg-sky-700 text-white px-2  mr-2 ml-2 text-md">
                        {descShow ? "-" : "+"}
                      </div>
                      <p className="uppercase text-primaryblue">{item.title}</p>
                    </div>
                    {descShow && <p className="mt-5">{item.description}</p>}
                  </div>
                );
              })}
            </div>
          )}

          <div className="border-2 mt-10 pb-5 mx-[10rem] mb-10">
            <h3 className="mb-5 mt-10 font-extrabold text-2xl text-primaryblue uppercase text-center">
              Submit your application
            </h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
                qualification: "",
                course: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values) => {
                // same shape as initial values
                console.log("Muduuuuuuu");
                console.log(files);
                const rawResponse = await fetch(
                  "http://localhost:1337/api/applications",
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data: values }),
                  }
                );
                const content = await rawResponse.json();

                console.log(content);
              }}
            >
              {({
                errors,
                touched,
                values,
                resetForm,
                setErrors,
                setTouched,
                handleSubmit,
              }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="flex flex-col flex-wrap items-center"
                >
                  <Field
                    name="name"
                    placeHolder="Name"
                    className={inputClasses}
                  />
                  {errors.name && touched.name ? (
                    <div onClick={() => setErrors({})} className={errorClasses}>
                      {errors.name}
                    </div>
                  ) : null}

                  <Field
                    name="email"
                    placeHolder="Email"
                    type="email"
                    className={inputClasses}
                  />
                  {errors.email && touched.email ? (
                    <div className={errorClasses}>{errors.email}</div>
                  ) : null}
                  <Field
                    name="phone"
                    placeHolder="Phone number"
                    type="number"
                    className={inputClasses}
                  />
                  {errors.phone && touched.phone ? (
                    <div className={errorClasses}>{errors.phone}</div>
                  ) : null}
                  <Field
                    name="qualification"
                    placeHolder="Qualification"
                    type="text"
                    className={inputClasses}
                  />
                  {errors.qualification && touched.qualification ? (
                    <div className={errorClasses}>{errors.qualification}</div>
                  ) : null}
                  <Field
                    name="address"
                    placeHolder="Address"
                    type="text"
                    className={inputClasses}
                  />
                  {errors.address && touched.address ? (
                    <div className={errorClasses}>{errors.address}</div>
                  ) : null}
                  <Field
                    name="course"
                    placeHolder="Course"
                    type="text"
                    className={inputClasses}
                  />
                  {errors.course && touched.course ? (
                    <div className={errorClasses}>{errors.course}</div>
                  ) : null}
                  <div className="flex flex-col my-3 w-4/5">
                    <label className={labelClasses}>File</label>
                    <div className="file-input">
                      <input type="file" />
                      <span className="button">Choose</span>
                      <span className="label" data-js-label>
                        No file selected
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col my-3 w-4/5">
                    <label className={labelClasses}>Image</label>
                    <div className="file-input">
                      <input type="file" />
                      <span className="button">Choose</span>
                      <span className="label" data-js-label>
                        No Image selected
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      console.log(errors);
                      console.log(values);
                      if (Object.keys(errors).length === 0) {
                        toast({ type: "success", message: "Form Submitted" });
                        setTimeout(
                          Router.reload(window.location.pathname),
                          2000
                        );
                      } else {
                        toast({ type: "error", message: "Check Form Entries" });
                      }
                    }}
                    type="submit"
                    disabled={values.name === ""}
                    className="p-2 bg-primaryblue font-bold text-white md:w-1/5 my-10 uppercase"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/programmes", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI("/programmes", {
    filters: {
      slug: params.slug,
    },
    populate: ["syllabus", "how_to_apply"],
  });

  return {
    props: { programme: res.data[0] },
    revalidate: 1,
  };
}

export default ProgrammeOpen;
